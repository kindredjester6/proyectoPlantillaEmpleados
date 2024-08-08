import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { EmpleadoModule } from './empleado/empleado.module';

@Module({
  imports: [EmpleadoModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
