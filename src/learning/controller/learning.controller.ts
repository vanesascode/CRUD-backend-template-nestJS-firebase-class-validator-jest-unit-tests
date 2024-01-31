import { Body, Controller, Post, Get, Delete, Param } from '@nestjs/common';
import { LearningService } from '../service/learning.service';

@Controller('learning')
export class LearningController {
  constructor(private readonly learningService: LearningService) {}
  @Post('createData')
  async createData(@Body() data: any): Promise<any> {
    await this.learningService.createData(data);
  }

  @Get('getData')
  async getData(): Promise<any> {
    return await this.learningService.getData();
  }

  @Delete('deleteData/:id')
  async deleteData(@Param('id') id: string): Promise<any> {
    return await this.learningService.deleteData(id);
  }
}
