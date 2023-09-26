import { Injectable } from '@nestjs/common';
import { ViagemRepository } from '../repository/viagem.repository';
import { Viagem } from '../entities/viagem.entity';
import { CreateViagemDto } from '../dto/create-viagem.dto';

@Injectable()
export class CreateViagemUseCase {
  constructor(private readonly viagemRepository: ViagemRepository) {}

  async create(createViagemDto: CreateViagemDto): Promise<Viagem> {
    try {
      return this.viagemRepository.create(createViagemDto);
    } catch (error) {
      throw new Error(error);
    }
  }
}
