import {
  MinLength,
  Max,
  Min,
  IsEmail,
  IsInt,
  Length,
  IsDate,
  MaxLength,
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

  @IsDate()
  createDate: Date;

  @MaxLength(10, {
    each: true,
    message: 'Other animals must be less than 10 characters',
  })
  otherAnimals: string[];
}
