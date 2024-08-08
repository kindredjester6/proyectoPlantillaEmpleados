import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Personas } from '@prisma/client';

@Injectable()
export class PersonasService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: number): Promise<Personas | null> {
    return this.prisma.$queryRaw``;
  }

  async findAll(): Promise<Personas[]> {
    return this.prisma.$queryRaw``;
  }

  async create(data: {codigo: String, nombre: String, precio: number}): Promise<Personas> {
    console.log(data)
    return this.prisma.$queryRaw`
    DECLARE	@outResult int
    exec [dbo].[CreatePerson]
		@Name = ${data.codigo},
		@Edad = ${data.nombre},
		@Email = ${data.precio},
		@outResult = @outResult output`;
  }

  async update(id: number, data: {}): Promise<Personas> {
    return this.prisma.$queryRaw``;
  }

  async delete(id: number): Promise<Personas> {
    return this.prisma.$queryRaw``;
  }
}