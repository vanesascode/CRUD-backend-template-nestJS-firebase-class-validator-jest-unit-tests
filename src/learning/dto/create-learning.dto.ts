import {
  MinLength,
  Max,
  Min,
  IsEmail,
  IsInt,
  Length,
  MaxLength,
  IsEnum,
} from 'class-validator';

export class CreateLearningDto {
  @Min(0)
  @Max(100)
  @IsInt()
  age: number;

  @MinLength(3, { message: 'Jesus! call your cat a longer name!' })
  cat: string;

  @MinLength(3)
  dog: string;

  @Length(10, 20)
  owner: string;

  @IsEmail()
  email: string;

  createDate: string;

  @MaxLength(10, {
    each: true,
    message: 'Other animals must be less than 10 characters',
  })
  otherAnimals: string[];

  @IsEnum(['male', 'female', 'binary', 'other'])
  gender: 'male' | 'female' | 'binary' | 'other';
}
