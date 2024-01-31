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

@Injectable()
export class LearningService {
  async createData(data: any): Promise<any> {
    const dataRef: DatabaseReference = ref(firebaseDatabase, 'Data');
    const newElementRef = push(dataRef, { dataRef: data });
    await set(newElementRef, data);
    console.log('Data created successfully');
  }

  async getData(): Promise<any> {
    const dataRef: DatabaseReference = ref(firebaseDatabase, 'Data');
    const snapshot: DataSnapshot = await get(dataRef);
    console.log('Data retrieved successfully');
    return snapshot.val();
  }

  async deleteData(id: string): Promise<void> {
    const dataRef: DatabaseReference = ref(firebaseDatabase, 'Data');
    const snapshot = await get(dataRef);
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      if (childKey === id) {
        const dataToDeleteRef: DatabaseReference = ref(
          firebaseDatabase,
          'Data/' + childKey,
        );
        remove(dataToDeleteRef);
        console.log('Data deleted successfully');
      }
    });
  }
}
