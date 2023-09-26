import { Module } from '@nestjs/common';
import { DestinoController } from './destino.controller';
import { DestinoRepository } from '../domain/repository/destino.repository';
import { CreateDestinoUseCase } from '../domain/use-cases/create-destino.use-cases';
import { UpdateDestinoUseCase } from '../domain/use-cases/update-destino.use-cases';
import { DeleteDestinoUseCase } from '../domain/use-cases/delete-destino.use-cases';
import { FindDestinoUseCase } from '../domain/use-cases/find-destino.use-cases';
import { DestinoRepositoryImpl } from '../data-access/repository/destino.repository.impl';

@Module({
  controllers: [DestinoController],
  providers: [
    {
      provide: DestinoRepository,
      useClass: DestinoRepositoryImpl,
    },
    CreateDestinoUseCase,
    UpdateDestinoUseCase,
    DeleteDestinoUseCase,
    FindDestinoUseCase,
  ],
  imports: [],
})
export class DestinoModule {}
