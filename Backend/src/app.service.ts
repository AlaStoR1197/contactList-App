import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { nombre: string; carne: string } {
    return {
      nombre: 'Asbiel Romario Ramírez Rivera',
      carne: '2890-18-11745',
    };
  }
}
