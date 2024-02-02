import { PartialType } from '@nestjs/mapped-types';
import { CreateLearningDto } from './create-learning.dto';

export class UpdateStudentDto extends PartialType(CreateLearningDto) {}
