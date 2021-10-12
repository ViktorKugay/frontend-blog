import {StorageProvider} from './types';
import {initializeApp, FirebaseOptions} from 'firebase/app';
import {Repository} from '../../../constants/repositories';

import {
  getFirestore,
  Firestore,
  collection,
  getDocs,
  CollectionReference,
  DocumentData,
  addDoc,
} from 'firebase/firestore/lite';

export class FireStoreProvider implements StorageProvider {
  private readonly storage: Firestore;

  constructor() {
    this.storage = getFirestore(
      initializeApp(process.env.FIRESTORE_CREDENTIALS as FirebaseOptions),
    );
  }

  public async save<T>(repo: Repository, entity: T): Promise<T> {
    await addDoc(this.getCollection(repo), entity);

    return entity;
  }

  public async findAll<T>(repo: Repository): Promise<T> {
    const {docs} = await getDocs(this.getCollection(repo));

    return docs.map((doc) => doc.data()).shift() as T;
  }

  private getCollection(repo: string): CollectionReference<DocumentData> {
    return collection(this.storage, repo);
  }
}
