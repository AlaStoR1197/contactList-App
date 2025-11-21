import { Module } from '@nestjs/common';
import { ContactosController } from './contactos.controller';
import { ContactosService } from './contactos.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [ContactosController],
  providers: [ContactosService, PrismaService],
})
export class ContactosModule {}
