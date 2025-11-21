import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactosService } from './services/contactos.service';
import { Contacto } from './models/contacto.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Gestión de Contactos');

  contactos = signal<Contacto[]>([]);
  terminoBusqueda = signal('');
  nuevoContacto: Contacto = { nombre: '', telefono: '' };
  cargando = signal(false);
  error = signal('');

  constructor(private contactosService: ContactosService) {}

  ngOnInit() {
    this.cargarContactos();
  }

  cargarContactos() {
    this.cargando.set(true);
    this.error.set('');
    this.contactosService.obtenerTodos().subscribe({
      next: (contactos) => {
        this.contactos.set(contactos);
        this.cargando.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar contactos');
        this.cargando.set(false);
        console.error('Error:', err);
      }
    });
  }

  buscarContactos() {
    const termino = this.terminoBusqueda();
    this.cargando.set(true);
    this.error.set('');

    if (termino.trim() === '') {
      this.cargarContactos();
      return;
    }

    this.contactosService.buscar(termino).subscribe({
      next: (contactos) => {
        this.contactos.set(contactos);
        this.cargando.set(false);
      },
      error: (err) => {
        this.error.set('Error al buscar contactos');
        this.cargando.set(false);
        console.error('Error:', err);
      }
    });
  }

  agregarContacto() {
    if (!this.nuevoContacto.nombre.trim() || !this.nuevoContacto.telefono.trim()) {
      this.error.set('Nombre y teléfono son requeridos');
      return;
    }

    this.cargando.set(true);
    this.error.set('');

    this.contactosService.crear(this.nuevoContacto).subscribe({
      next: (contacto) => {
        this.nuevoContacto = { nombre: '', telefono: '' };
        this.cargarContactos();
      },
      error: (err) => {
        this.error.set('Error al agregar contacto');
        this.cargando.set(false);
        console.error('Error:', err);
      }
    });
  }

  eliminarContacto(id: number) {
    if (!confirm('¿Estás seguro de eliminar este contacto?')) {
      return;
    }

    this.cargando.set(true);
    this.error.set('');

    this.contactosService.eliminar(id).subscribe({
      next: () => {
        this.cargarContactos();
      },
      error: (err) => {
        this.error.set('Error al eliminar contacto');
        this.cargando.set(false);
        console.error('Error:', err);
      }
    });
  }

  onBusquedaChange(event: Event) {
    const termino = (event.target as HTMLInputElement).value;
    this.terminoBusqueda.set(termino);
    this.buscarContactos();
  }
}
