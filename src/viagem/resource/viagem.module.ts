import { Module } from '@nestjs/common';
import { ViagemController } from './viagem.controller';
import { ViagemRepository } from '../domain/repository/viagem.repository';
import { ViagemRepositoryImpl } from '../data-access/repository/viagem.repository.impl';
import { CreateViagemUseCase } from '../domain/use-cases/create-viagem.use-cases';
import { UpdateViagemUseCase } from '../domain/use-cases/update-viagem.use-cases';
import { DeleteViagemUseCase } from '../domain/use-cases/delete-viagem.use-cases';
import { FindViagemUseCase } from '../domain/use-cases/find-viagem.use-cases';

@Module({
  controllers: [ViagemController],
  providers: [
    {
      provide: ViagemRepository,
      useClass: ViagemRepositoryImpl,
    },
    CreateViagemUseCase,
    UpdateViagemUseCase,
    DeleteViagemUseCase,
    FindViagemUseCase,
  ],
  imports: [],
})
export class ViagemModule {}
