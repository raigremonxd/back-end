import { Injectable } from '@nestjs/common';
import { UpdateDestinoDto } from '../dto/update-destino.dto';
import { Destino } from '../entities/destino.entity';
import { DestinoRepository } from '../repository/destino.repository';

@Injectable()
export class UpdateDestinoUseCase {
  constructor(private readonly destinoRepository: DestinoRepository) {}

  async update(
    id: string,
    updateDestinoDto: UpdateDestinoDto,
  ): Promise<Destino> {
    try {
      return this.destinoRepository.update(id, updateDestinoDto);
    } catch (error) {
      throw new Error(error);
    }
  }
}
