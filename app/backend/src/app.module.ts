import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { EmpleadoModule } from './empleado/empleado.module';

/**
 * @module Module En el modulo raíz/principal se importa todos los modulos
 * construidos con anterioridad y los exporta hacia el main.ts para levantar la 
 * aplicación
 */
@Module({
  imports: [EmpleadoModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
