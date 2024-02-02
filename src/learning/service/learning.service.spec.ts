import { Test, TestingModule } from '@nestjs/testing';
import { LearningService } from './learning.service';
import { CreateLearningDto } from '../dto/create-learning.dto';

describe('LearningService', () => {
  let service: LearningService;
  let learningService: LearningService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LearningService],
    }).compile();
    learningService = module.get<LearningService>(LearningService);
    service = module.get<LearningService>(LearningService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should retrieve data successfully', async () => {
    // Act
    const retrievedData = await learningService.getData();

    // Assert
    expect(retrievedData).toBeDefined(); // Assert that the retrieved data is not undefined
    // Add additional assertions as needed based on the expected behavior of the retrieved data
  });

  it('should retrieve data successfully matching the data', async () => {
    // Act and Assert
    await expect(learningService.getData()).resolves.toMatchObject({
      // Define the expected structure of the retrieved data here
    });
  });

  it('should retrieve data by ID successfully', async () => {
    // Arrange
    const id = '-NpfFz1SGPWlDinBwY1w'; // Replace with a valid ID

    // Act and Assert
    await expect(learningService.getDataById(id)).resolves.toMatchObject({
      age: 5,
      cat: 'someCat',
      dog: 'someDog',
      email: 'someEmail',
      gender: 'female',
      otherAnimals: ['animals'],
      owner: 'someOwner',
    });
  });

  it('should create data successfully', async () => {
    // Arrange
    const mockData: CreateLearningDto = {
      age: 5,
      cat: 'someCat',
      dog: 'someDog',
      owner: 'someOwner',
      email: 'someEmail',
      createDate: '2023-06-15T12:00:00',
      otherAnimals: ['animals'],
      gender: 'female',
    };

    // Act
    const createdData = await service.createData(mockData);

    // Assert
    expect(createdData).toMatchObject(mockData);
  });

  it('should delete data successfully', async () => {
    // Arrange
    const idToDelete = '-NpdJTsAPqJpYj4YD8zd';

    // Act
    const deletedData = await learningService.deleteData(idToDelete);

    // Assert
    expect(deletedData).toBeNull();

    it('should update data successfully', async () => {
      // Arrange
      const idToUpdate = '-Npexwnhe3fV9UUXwcCx'; // Replace with a valid ID to update
      const updateLearningDto = {
        cat: 'newValue',
        // Add any other properties to update as needed
      };

      // Act
      const updatedData = await learningService.updateData(
        idToUpdate,
        updateLearningDto,
      );

      // Assert
      expect(updatedData).toMatchObject({
        cat: 'newValue',
        dog: 'Walter',
        helper: 'Adsdsd',
        owner: 'Vanesa',
      });
    });

    it('should throw an error when attempting to delete non-existent data', async () => {
      // Arrange
      const nonExistentId = 'nonExistentId'; // Replace with a non-existent ID

      // Act and Assert
      await expect(learningService.deleteData(nonExistentId)).rejects.toThrow(
        `Data with ID ${nonExistentId} not found`,
      );
    });
  });
});
