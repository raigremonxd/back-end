import { CreateViagemDto } from '../dto/create-viagem.dto';
import { UpdateViagemDto } from '../dto/update-viagem.dto';
import { Viagem } from '../entities/viagem.entity';

export abstract class ViagemRepository {
  abstract create(createViagemDto: CreateViagemDto): Promise<Viagem>;

  abstract update(
    id: string,
    updateViagemDto: UpdateViagemDto,
  ): Promise<Viagem>;

  abstract delete(id: string): Promise<void>;

  abstract findAll(): Promise<Viagem[]>;

  abstract findOne(id: string): Promise<Viagem>;
}
