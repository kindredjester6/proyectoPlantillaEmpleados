import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { PersonasModule } from './personas/personas.module';

@Module({
  imports: [ProductosModule, PersonasModule],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
