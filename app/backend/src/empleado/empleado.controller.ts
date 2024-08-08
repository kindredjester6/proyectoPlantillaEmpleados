import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';


@Controller()
export class EmpleadoController {
  constructor(private readonly empleadoService: EmpleadoService) {}

  @Post()
  create(@Body() data: {nombre: String, salario: number}) { //createPersonaDto: CreatePersonaDto
    return this.empleadoService.create(data);
  }

  @Get()
  findAll() {
    return this.empleadoService.findAll();
  }

}