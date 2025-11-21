import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { ContactosService } from './contactos.service';
import { CrearContactoDto } from './dto/crear-contacto.dto';

@Controller('contactos')
export class ContactosController {
  constructor(private readonly contactosService: ContactosService) {}

  @Get()
  async obtenerTodos(@Query('search') search?: string) {
    return this.contactosService.obtenerTodos(search);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async crear(@Body() crearContactoDto: CrearContactoDto) {
    return this.contactosService.crear(
      crearContactoDto.nombre,
      crearContactoDto.telefono,
    );
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async eliminar(@Param('id', ParseIntPipe) id: number) {
    return this.contactosService.eliminar(id);
  }
}
