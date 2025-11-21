import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Contactos } from '@prisma/client';

@Injectable()
export class ContactosService {
  constructor(private prisma: PrismaService) {}

  async obtenerTodos(search?: string): Promise<Contactos[]> {
    if (search) {
      return this.prisma.contactos.findMany({
        where: {
          nombre: {
            contains: search,
            mode: 'insensitive',
          },
        },
        orderBy: {
          id: 'desc',
        },
      });
    }

    return this.prisma.contactos.findMany({
      orderBy: {
        id: 'desc',
      },
    });
  }

  async crear(nombre: string, telefono: string): Promise<Contactos> {
    return this.prisma.contactos.create({
      data: {
        nombre,
        telefono,
      },
    });
  }

  async eliminar(id: number): Promise<Contactos> {
    return this.prisma.contactos.delete({
      where: { id },
    });
  }
}
