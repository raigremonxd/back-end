import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateDestinoUseCase } from '../domain/use-cases/create-destino.use-cases';
import { UpdateDestinoUseCase } from '../domain/use-cases/update-destino.use-cases';
import { DeleteDestinoUseCase } from '../domain/use-cases/delete-destino.use-cases';
import { FindDestinoUseCase } from '../domain/use-cases/find-destino.use-cases';
import { CreateDestinoDto } from '../domain/dto/create-destino.dto';
import { UpdateDestinoDto } from '../domain/dto/update-destino.dto';

@Controller('destino')
export class DestinoController {
  constructor(
    private readonly createDestinoUseCase: CreateDestinoUseCase,
    private readonly updateDestinoUseCase: UpdateDestinoUseCase,
    private readonly deleteDestinoUseCase: DeleteDestinoUseCase,
    private readonly findDestinoUseCase: FindDestinoUseCase,
  ) {}

  @Post()
  async create(@Body() createDestinoDto: CreateDestinoDto) {
    return this.createDestinoUseCase.create(createDestinoDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDestinoDto: UpdateDestinoDto,
  ) {
    return this.updateDestinoUseCase.update(id, updateDestinoDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.deleteDestinoUseCase.delete(id);
  }

  @Get()
  async findAll() {
    return this.findDestinoUseCase.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.findDestinoUseCase.findOne(id);
  }
}
