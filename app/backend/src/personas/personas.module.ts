import { Module } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { PersonasController } from './personas.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PersonasController],
  providers: [PersonasService, PrismaService],
})
export class PersonasModule {}
