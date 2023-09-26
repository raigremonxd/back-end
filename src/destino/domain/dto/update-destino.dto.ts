import { CreateDestinoDto } from './create-destino.dto';

export class UpdateDestinoDto extends CreateDestinoDto {
  nome: string;
  id_viagem: string;
}
