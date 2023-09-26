import { Injectable } from '@nestjs/common';
import { ViagemRepository } from '../repository/viagem.repository';
import { Viagem } from '../entities/viagem.entity';

@Injectable()
export class FindViagemUseCase {
  constructor(private readonly viagemRepository: ViagemRepository) {}

  async findAll(): Promise<Viagem[]> {
    try {
      return this.viagemRepository.findAll();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: string): Promise<Viagem> {
    try {
      return this.viagemRepository.findOne(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
