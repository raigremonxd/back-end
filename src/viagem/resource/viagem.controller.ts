import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateViagemUseCase } from '../domain/use-cases/create-viagem.use-cases';
import { UpdateViagemUseCase } from '../domain/use-cases/update-viagem.use-cases';
import { DeleteViagemUseCase } from '../domain/use-cases/delete-viagem.use-cases';
import { FindViagemUseCase } from '../domain/use-cases/find-viagem.use-cases';
import { CreateViagemDto } from '../domain/dto/create-viagem.dto';
import { UpdateViagemDto } from '../domain/dto/update-viagem.dto';

@Controller('viagem')
export class ViagemController {
  constructor(
    private readonly createViagemUseCase: CreateViagemUseCase,
    private readonly updateViagemUseCase: UpdateViagemUseCase,
    private readonly deleteViagemUseCase: DeleteViagemUseCase,
    private readonly findViagemUseCase: FindViagemUseCase,
  ) {}

  @Post()
  async create(@Body() createViagemDto: CreateViagemDto) {
    return this.createViagemUseCase.create(createViagemDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateViagemDto: UpdateViagemDto,
  ) {
    return this.updateViagemUseCase.update(id, updateViagemDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.deleteViagemUseCase.delete(id);
  }

  @Get()
  async findAll() {
    return this.findViagemUseCase.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.findViagemUseCase.findOne(id);
  }
}
