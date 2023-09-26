import { Injectable } from '@nestjs/common';
import { DestinoRepository } from '../repository/destino.repository';
import { Destino } from '../entities/destino.entity';

@Injectable()
export class FindDestinoUseCase {
  constructor(private readonly destinoRepository: DestinoRepository) {}

  async findAll(): Promise<Destino[]> {
    try {
      return this.destinoRepository.findAll();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: string): Promise<Destino> {
    try {
      return this.destinoRepository.findOne(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
