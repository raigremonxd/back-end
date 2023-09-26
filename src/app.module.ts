import { Module } from '@nestjs/common';
import { ViagemModule } from './viagem/resource/viagem.module';
import { KnexModule } from 'nest-knexjs';
import { DestinoModule } from './destino/resource/destino.module';

@Module({
  imports: [
    ViagemModule,
    DestinoModule,
    KnexModule.forRoot({
      config: {
        client: 'pg',
        connection: {
          host: '127.0.0.1',
          user: 'postgres',
          password: 'admin123',
          database: 'Tema03',
        },
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
