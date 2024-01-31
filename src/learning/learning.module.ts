import { Module } from '@nestjs/common';
import { LearningService } from './service/learning.service';
import { LearningController } from './controller/learning.controller';

@Module({
  providers: [LearningService],
  controllers: [LearningController],
})
export class LearningModule {}
