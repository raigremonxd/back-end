import { CreateDestinoDto } from '../dto/create-destino.dto';
import { UpdateDestinoDto } from '../dto/update-destino.dto';
import { Destino } from '../entities/destino.entity';

export abstract class DestinoRepository {
  abstract create(createDestinoDto: CreateDestinoDto): Promise<Destino>;

  abstract update(
    id: string,
    updateDestinoDto: UpdateDestinoDto,
  ): Promise<Destino>;

  abstract delete(id: string): Promise<void>;

  abstract findAll(): Promise<Destino[]>;

  abstract findOne(id: string): Promise<Destino>;
}
