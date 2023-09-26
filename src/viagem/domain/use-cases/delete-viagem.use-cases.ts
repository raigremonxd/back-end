import { Injectable } from '@nestjs/common';
import { ViagemRepository } from '../repository/viagem.repository';

@Injectable()
export class DeleteViagemUseCase {
  constructor(private readonly viagemRepository: ViagemRepository) {}

  async delete(id: string): Promise<void> {
    try {
      return this.viagemRepository.delete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
