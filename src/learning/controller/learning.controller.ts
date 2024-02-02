import {
  Body,
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Put,
  NotFoundException,
  BadRequestException,
  Patch,
  ValidationPipe,
} from '@nestjs/common';
import { LearningService } from '../service/learning.service';
import { CreateLearningDto } from '../dto/create-learning.dto';
import { UpdateLearningDto } from '../dto/update-learning.dto';

@Controller('learning')
export class LearningController {
  constructor(private readonly learningService: LearningService) {}

  @Post()
  async createData(
    @Body(new ValidationPipe()) createLearningDto: CreateLearningDto,
  ): Promise<CreateLearningDto> {
    return await this.learningService.createData(createLearningDto);
  }

  @Put(':id')
  async updateData(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateLearningDto: UpdateLearningDto,
  ): Promise<UpdateLearningDto> {
    return await this.learningService.updateData(id, updateLearningDto);
  }

  @Patch(':id')
  async patchData(
    @Param('id') id: string,
    @Body(new ValidationPipe())
    partialUpdateLearningDto: Partial<UpdateLearningDto>,
  ): Promise<UpdateLearningDto> {
    return await this.learningService.patchData(id, partialUpdateLearningDto);
  }

  @Get()
  async getData(): Promise<CreateLearningDto> {
    try {
      return await this.learningService.getData();
    } catch (error) {
      throw new BadRequestException('Data not found');
    }
  }

  @Get(':id')
  async getDataById(@Param('id') id: string): Promise<CreateLearningDto> {
    try {
      return await this.learningService.getDataById(id);
    } catch (error) {
      throw new NotFoundException(`Data with ID ${id} not found`);
    }
  }

  @Delete(':id')
  async deleteData(@Param('id') id: string): Promise<CreateLearningDto> {
    try {
      return await this.learningService.deleteData(id);
    } catch (error) {
      throw new NotFoundException(`Data with ID ${id} not found`);
    }
  }
}
