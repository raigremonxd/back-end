import { Injectable } from '@nestjs/common';
import { CreateDestinoDto } from '../dto/create-destino.dto';
import { Destino } from '../entities/destino.entity';
import { DestinoRepository } from '../repository/destino.repository';

@Injectable()
export class CreateDestinoUseCase {
  constructor(private readonly destinoRepository: DestinoRepository) {}

  async create(createDestinoDto: CreateDestinoDto): Promise<Destino> {
    try {
      return this.destinoRepository.create(createDestinoDto);
    } catch (error) {
      throw new Error(error);
    }
  }
}
