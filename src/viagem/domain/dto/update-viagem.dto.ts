import { Destino } from 'src/destino/domain/entities/destino.entity';
import { CreateViagemDto } from './create-viagem.dto';

export class UpdateViagemDto extends CreateViagemDto {
  nome: string;
  dataSaida: Date;
  dataChegada: Date;
  valor: number;
  destinos: Destino[];
}
