import { Module } from '@nestjs/common';
import { BdService } from './database/database.service';
import { EmpleadoModule } from './empleado/empleado.module';
import { ConfigModule } from '@nestjs/config';
/**
 * @module Module En el modulo raíz/principal se importa todos los modulos
 * construidos con anterioridad y los exporta hacia el main.ts para levantar la 
 * aplicación
 */
@Module({
  imports: [EmpleadoModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [BdService],
})
export class AppModule {}
