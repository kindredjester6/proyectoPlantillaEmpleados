import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Empleado } from '@prisma/client';

/**
 * @exports EmpleadoService @class Es una clase que conlleva la logica de
 * negocios por medio de metodos que conllevan la invocación de SP's,
 * cabe mencionar que no se realizan ninguna operación luego de la invocación
 */
@Injectable()
export class EmpleadoService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Empleado[]> {
    return this.prisma.$queryRaw`
    DECLARE @outResult int
    exec [dbo].[listEmployees]
      @outResult = @outResult output
    `;
  }

  async create(data: {nombre: String, salario: number}): Promise<Empleado> {
    console.log(data)
    return this.prisma.$queryRaw`
    DECLARE	@outResult int
    exec [dbo].[createEmployee]
		  @Nombre = ${data.nombre},
		  @Salario = ${data.salario},
		  @outResult = @outResult output`;
  }

}