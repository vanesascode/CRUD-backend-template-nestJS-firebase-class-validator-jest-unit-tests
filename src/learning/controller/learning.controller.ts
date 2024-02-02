import { Body, Controller, Post, Get, Delete, Param } from '@nestjs/common';
import { LearningService } from '../service/learning.service';
import { CreateLearningDto } from '../dto/create-learning.dto';

@Controller('learning')
export class LearningController {
  constructor(private readonly learningService: LearningService) {}
  @Post('createData')
  async createData(@Body() data: any): Promise<CreateLearningDto> {
    return await this.learningService.createData(data);
  }

  @Get('getData')
  async getData(): Promise<CreateLearningDto> {
    return await this.learningService.getData();
  }

  @Get('getData/:id')
  async getDataById(@Param('id') id: string): Promise<CreateLearningDto> {
    return await this.learningService.getDataById(id);
  }

  @Delete('deleteData/:id')
  async deleteData(@Param('id') id: string): Promise<CreateLearningDto> {
    return await this.learningService.deleteData(id);
  }
}
