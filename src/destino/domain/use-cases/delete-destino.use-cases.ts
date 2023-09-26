import { Injectable } from '@nestjs/common';
import { DestinoRepository } from '../repository/destino.repository';

@Injectable()
export class DeleteDestinoUseCase {
  constructor(private readonly destinoRepository: DestinoRepository) {}

  async delete(id: string): Promise<void> {
    try {
      return this.destinoRepository.delete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
