import { Destino } from 'src/destino/domain/entities/destino.entity';

export class CreateViagemDto {
  nome: string;
  dataSaida: Date;
  dataChegada: Date;
  valor: number;
  destinos: Destino[];
}
