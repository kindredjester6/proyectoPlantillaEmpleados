import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Productos } from '@prisma/client';

@Injectable()
export class ProductosService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: number): Promise<Productos | null> {
    return this.prisma.$queryRaw``;
  }

  async findAll(): Promise<Productos[]> {
    return this.prisma.$queryRaw``;
  }

  async create(data: {codigo: String, nombre: String, precio: number}): Promise<Productos> {
    console.log(data)
    return this.prisma.$queryRaw`
    DECLARE	@outResult int = 0
    exec [dbo].[CreateProduct]
		@codigo = ${data.codigo},
		@nombre = ${data.nombre},
		@precio = ${data.precio},
		@outResult = @outResult`;
  }

  async update(id: number, data: {}): Promise<Productos> {
    return this.prisma.$queryRaw``;
  }

  async delete(id: number): Promise<Productos> {
    return this.prisma.$queryRaw``;
  }
}