import { Injectable } from '@nestjs/common';
import {
  ref,
  push,
  set,
  DataSnapshot,
  get,
  remove,
  DatabaseReference,
} from 'firebase/database';
import { firebaseDatabase } from 'src/firebase.config';
import { CreateLearningDto } from '../dto/create-learning.dto';
import { UpdateLearningDto } from '../dto/update-learning.dto';

/**
 * A function to create data.
 *
 * @param {CreateLearningDto} createLearningDto - the data to be created
 * @return {Promise<CreateLearningDto>} the created data
 */
@Injectable()
export class LearningService {
  async createData(
    createLearningDto: CreateLearningDto,
  ): Promise<CreateLearningDto> {
    const dataRef: DatabaseReference = ref(firebaseDatabase, 'Data');
    const newElementRef = push(dataRef, { dataRef: createLearningDto });
    await set(newElementRef, createLearningDto);
    const snapshot: DataSnapshot = await get(newElementRef);
    const createdData = snapshot.val();
    console.log('Data created successfully', createdData);
    return createdData;
  }

  async updateData(
    id: string,
    updateLearningDto: UpdateLearningDto,
  ): Promise<CreateLearningDto> {
    const dataRef: DatabaseReference = ref(firebaseDatabase, 'Data');
    const snapshot = await get(dataRef);
    let updatedData: CreateLearningDto = null;
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      if (childKey === id) {
        const dataToUpdateRef: DatabaseReference = ref(
          firebaseDatabase,
          'Data/' + childKey,
        );
        let dataToUpdate = childSnapshot.val();
        dataToUpdate = { ...dataToUpdate, ...updateLearningDto }; // Merge the properties of dataToUpdate and updateLearningDto
        set(dataToUpdateRef, dataToUpdate);
        console.log('Data updated successfully');
        updatedData = dataToUpdate;
      }
    });
    if (!updatedData) {
      throw new Error(`Data with ID ${id} not found`);
    }
    return updatedData;
  }

  async patchData(
    id: string,
    partialUpdateLearningDto: Partial<UpdateLearningDto>,
  ): Promise<CreateLearningDto> {
    const dataRef: DatabaseReference = ref(firebaseDatabase, 'Data');
    const snapshot = await get(dataRef);
    let updatedData: CreateLearningDto = null;
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      if (childKey === id) {
        const dataToUpdateRef: DatabaseReference = ref(
          firebaseDatabase,
          'Data/' + childKey,
        );
        const dataToUpdate = childSnapshot.val();
        for (const key in partialUpdateLearningDto) {
          if (partialUpdateLearningDto.hasOwnProperty(key)) {
            dataToUpdate[key] = partialUpdateLearningDto[key];
          }
        }
        set(dataToUpdateRef, dataToUpdate);
        console.log('Data updated successfully');
        updatedData = dataToUpdate;
      }
    });
    if (!updatedData) {
      throw new Error(`Data with ID ${id} not found`);
    }
    return updatedData;
  }

  /**
   * Asynchronously retrieves data and returns a Promise that resolves to a CreateLearningDto.
   *
   * @return {Promise<CreateLearningDto>} the retrieved data
   */
  async getData(): Promise<CreateLearningDto> {
    try {
      const dataRef: DatabaseReference = ref(firebaseDatabase, 'Data');
      const snapshot: DataSnapshot = await get(dataRef);
      console.log('Data retrieved successfully');
      return snapshot.val();
    } catch (error) {
      throw new Error('Failed to retrieve data: ' + error.message);
    }
  }

  /**
   * Retrieves data by ID from the database.
   *
   * @param {string} id - The ID of the data to retrieve
   * @return {Promise<CreateLearningDto>} The retrieved data
   */

  async getDataById(id: string): Promise<CreateLearningDto> {
    const dataRef: DatabaseReference = ref(firebaseDatabase, 'Data');
    const snapshot = await get(dataRef);
    let retrievedData: CreateLearningDto = null;
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      if (childKey === id) {
        console.log('Data retrieved successfully', childSnapshot.val());
        retrievedData = childSnapshot.val();
      }
    });
    if (!retrievedData) {
      throw new Error(`Data with ID ${id} not found`);
    }
    return retrievedData;
  }

  /**
   * Asynchronously deletes data by ID from the database.
   *
   * @param {string} id - The ID of the data to be deleted
   * @return {Promise<CreateLearningDto>} The deleted data if found, otherwise null
   */
  async deleteData(id: string): Promise<CreateLearningDto> {
    const dataRef: DatabaseReference = ref(firebaseDatabase, 'Data');
    const snapshot = await get(dataRef);
    let deletedData: CreateLearningDto = null;
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      if (childKey === id) {
        const dataToDeleteRef: DatabaseReference = ref(
          firebaseDatabase,
          'Data/' + childKey,
        );
        remove(dataToDeleteRef);
        console.log('Data deleted successfully');
        deletedData = childSnapshot.val();
      }
    });
    if (!deletedData) {
      throw new Error(`Data with ID ${id} not found`);
    }
    return deletedData;
  }
}
