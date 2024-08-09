import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';

/**
 * @exports EmpleadoController @class Es una clase controlador que genera las rutas para realizar
 * las solicitudes hacia la base de datos y obtener un objeto(json) que contiene la respuesta
 * de dicha solicitud.
 */
@Controller()
export class EmpleadoController {
  constructor(private readonly empleadoService: EmpleadoService) {}

  /**
   * 
   * @param data Contiene los datos que le otorgará el cliente al empleado
   * para realizar la solicitud hacia la base de datos
   * @returns 
   */
  @Post()
  create(@Body() data: {nombre: String, salario: number}) { 
    return this.empleadoService.create(data);
  }

  /**
   * 
   * @returns Obtiene todos los empleados por medio de un objeto
   */
  @Get()
  findAll() {
    return this.empleadoService.findAll();
  }

}