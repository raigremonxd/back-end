import { UnauthorizedException } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { CreateDestinoDto } from 'src/destino/domain/dto/create-destino.dto';
import { UpdateDestinoDto } from 'src/destino/domain/dto/update-destino.dto';
import { Destino } from 'src/destino/domain/entities/destino.entity';
import { DestinoRepository } from 'src/destino/domain/repository/destino.repository';

export class DestinoRepositoryImpl implements DestinoRepository {
  constructor(@InjectModel() private readonly knex: Knex) {}

  async create(createDestinoDto: CreateDestinoDto): Promise<Destino> {
    try {
      if (!createDestinoDto.id_viagem)
        throw new UnauthorizedException(
          'Um destino deve estar associado a uma viagem!',
        );

      const [Destino] = await this.knex('destino')
        .insert(createDestinoDto)
        .returning('*');
      return Destino;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  async update(
    id: string,
    updateDestinoDto: UpdateDestinoDto,
  ): Promise<Destino> {
    try {
      const [updatedDestino] = await this.knex('destino')
        .where({ id })
        .update(updateDestinoDto)
        .returning('*');
      return updatedDestino;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.knex('destino').where({ id }).del();
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  async findAll(): Promise<Destino[]> {
    try {
      const viagens = await this.knex('destino').select('*');
      return viagens;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  async findOne(id: string): Promise<Destino> {
    try {
      const [Destino] = await this.knex('destino').where({ id }).select('*');
      return Destino;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
