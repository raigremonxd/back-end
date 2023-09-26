import { ViagemRepository } from 'src/viagem/domain/repository/viagem.repository';
import { CreateViagemDto } from 'src/viagem/domain/dto/create-viagem.dto';
import { Viagem } from 'src/viagem/domain/entities/viagem.entity';
import { UpdateViagemDto } from 'src/viagem/domain/dto/update-viagem.dto';
import { UnauthorizedException } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';

export class ViagemRepositoryImpl implements ViagemRepository {
  constructor(@InjectModel() private readonly knex: Knex) {}

  async create(createViagemDto: CreateViagemDto): Promise<Viagem> {
    try {
      const [viagem] = await this.knex('viagem')
        .insert(createViagemDto)
        .returning('*');
      return viagem;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  async update(id: string, updateViagemDto: UpdateViagemDto): Promise<Viagem> {
    try {
      const [updatedViagem] = await this.knex('viagem')
        .where({ id })
        .update(updateViagemDto)
        .returning('*');
      return updatedViagem;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const destinations = await this.knex('destino').where({ id_viagem: id });

      if (destinations.length === 0) {
        await this.knex('viagem').where({ id }).del();
      } else {
        await this.knex('destino').where({ id_viagem: id }).del();
      }
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  async findAll(): Promise<Viagem[]> {
    try {
      const viagens = await this.knex('viagem').select('*');
      return viagens;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  async findOne(id: string): Promise<Viagem> {
    try {
      const [viagem] = await this.knex('viagem').where({ id }).select('*');
      return viagem;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
