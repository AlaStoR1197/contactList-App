import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  private apiUrl = 'http://localhost:3001/contactos';

  constructor(private http: HttpClient) {}

  obtenerTodos(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(this.apiUrl);
  }

  buscar(termino: string): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(`${this.apiUrl}?search=${termino}`);
  }

  crear(contacto: Contacto): Observable<Contacto> {
    return this.http.post<Contacto>(this.apiUrl, contacto);
  }

  eliminar(id: number): Observable<Contacto> {
    return this.http.delete<Contacto>(`${this.apiUrl}/${id}`);
  }
}
