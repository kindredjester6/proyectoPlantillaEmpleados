import { Module } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { EmpleadoController } from './empleado.controller';
import { PrismaService } from 'src/prisma/prisma.service';

/**
 * @method Module Es un metodo que importa el controlador y la 
 * logica de negocios, para que de está manera se pueda representar su
 * funcionalidad completa por medio de este modulo y exportarlo para
 * aprovecharlo.  
 */
@Module({
  controllers: [EmpleadoController],
  providers: [EmpleadoService, PrismaService],
})
export class EmpleadoModule {}
