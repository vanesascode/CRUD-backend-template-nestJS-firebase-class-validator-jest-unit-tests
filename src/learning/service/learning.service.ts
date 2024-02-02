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

  /**
   * Asynchronously retrieves data and returns a Promise that resolves to a CreateLearningDto.
   *
   * @return {Promise<CreateLearningDto>} the retrieved data
   */
  async getData(): Promise<CreateLearningDto> {
    const dataRef: DatabaseReference = ref(firebaseDatabase, 'Data');
    const snapshot: DataSnapshot = await get(dataRef);
    console.log('Data retrieved successfully');
    return snapshot.val();
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
    return deletedData;
  }
}
