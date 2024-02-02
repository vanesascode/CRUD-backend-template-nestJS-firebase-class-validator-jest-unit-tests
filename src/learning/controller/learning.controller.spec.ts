import { Test, TestingModule } from '@nestjs/testing';
import { LearningController } from './learning.controller';
import { LearningService } from '../service/learning.service';
import { CreateLearningDto } from '../dto/create-learning.dto';
import { UpdateLearningDto } from '../dto/update-learning.dto';

describe('LearningController', () => {
  let learningController: LearningController;
  let learningService: LearningService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LearningController],
      providers: [LearningService],
    }).compile();

    learningController = app.get<LearningController>(LearningController);
    learningService = app.get<LearningService>(LearningService);
  });

  it('should be defined', () => {
    expect(learningController).toBeDefined();
  });

  it('should create data', async () => {
    const createLearningDto: CreateLearningDto = {
      age: 5,
      cat: 'someCat',
      dog: 'someDog',
      owner: 'someOwner',
      email: 'someEmail',
      createDate: '2023-06-15T12:00:00',
      otherAnimals: ['animals'],
      gender: 'male',
    };
    jest
      .spyOn(learningService, 'createData')
      .mockImplementation(() => Promise.resolve(createLearningDto));

    expect(await learningController.createData(createLearningDto)).toBe(
      createLearningDto,
    );
  });

  it('should update data', async () => {
    const id = 'someId'; // Replace with a valid ID
    const updateLearningDto: UpdateLearningDto = {
      age: 8,
      cat: 'someCat',
      dog: 'someDog',
      owner: 'someOwner',
      email: 'someEmail',
      createDate: '2023-06-15T12:00:00',
      otherAnimals: ['animals'],
      gender: 'male',
    };
    jest
      .spyOn(learningService, 'updateData')
      .mockImplementation(() => Promise.resolve(updateLearningDto));

    expect(await learningController.updateData(id, updateLearningDto)).toBe(
      updateLearningDto,
    );
  });

  it('should delete data', async () => {
    const id = 'someId'; // Replace with a valid ID
    const deletedLearningDto: CreateLearningDto = {
      age: 5,
      cat: 'someCat',
      dog: 'someDog',
      owner: 'someOwner',
      email: 'someEmail',
      createDate: '2023-06-15T12:00:00',
      otherAnimals: ['animals'],
      gender: 'male',
    };
    jest
      .spyOn(learningService, 'deleteData')
      .mockImplementation(() => Promise.resolve(deletedLearningDto));

    const result = await learningController.deleteData(id);
    expect(result).toEqual(deletedLearningDto);
  });
});
