import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonasService } from './personas.service';


@Controller('personas')
export class PersonasController {
  constructor(private readonly personasService: PersonasService) {}

  @Post()
  create(@Body() data: {codigo: String, nombre: String, precio: number}) { //createPersonaDto: CreatePersonaDto
    return this.personasService.create(data);
  }

  @Get()
  findAll() {
    return this.personasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data:{}) { 
    return this.personasService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personasService.delete(+id);
  }
}