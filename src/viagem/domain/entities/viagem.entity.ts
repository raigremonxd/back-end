import { Destino } from 'src/destino/domain/entities/destino.entity';

export interface Viagem {
  nome: string;
  dataSaida: Date;
  dataChegada: Date;
  valor: number;
  destinos: Destino[];
}
