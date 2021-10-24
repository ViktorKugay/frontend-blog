import {StorageProvider} from './types';
import {FirebaseOptions, initializeApp} from 'firebase/app';
import {Repository} from '../../../constants/repositories';

import {
  getFirestore,
  Firestore,
  collection,
  getDocs,
  CollectionReference,
  DocumentData,
  addDoc,
  QueryDocumentSnapshot,
} from 'firebase/firestore/lite';

export class FireStoreProvider implements StorageProvider {
  private readonly storage: Firestore;

  constructor() {
    this.storage = getFirestore(
      initializeApp(process.env.APP_FIRESTORE_CREDENTIALS as FirebaseOptions),
    );
  }

  public async save<T>(repo: Repository, entity: T): Promise<T> {
    await addDoc(this.getCollection(repo), entity);

    return entity;
  }

  public async findAll<T>(repo: Repository): Promise<T[]> {
    const {docs} = await getDocs(this.getCollection(repo));

    return docs.map((doc) => this.extractDoc<T>(doc));
  }

  private extractDoc<T>(doc: QueryDocumentSnapshot<DocumentData>): T {
    return {...doc.data(), id: doc.id} as unknown as T;
  }

  private getCollection(repo: string): CollectionReference<DocumentData> {
    return collection(this.storage, repo);
  }
}
