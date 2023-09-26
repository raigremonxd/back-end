import { Injectable } from '@nestjs/common';
import { ViagemRepository } from '../repository/viagem.repository';
import { Viagem } from '../entities/viagem.entity';
import { UpdateViagemDto } from '../dto/update-viagem.dto';

@Injectable()
export class UpdateViagemUseCase {
  constructor(private readonly viagemRepository: ViagemRepository) {}

  async update(id: string, updateViagemDto: UpdateViagemDto): Promise<Viagem> {
    try {
      return this.viagemRepository.update(id, updateViagemDto);
    } catch (error) {
      throw new Error(error);
    }
  }
}
