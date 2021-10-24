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
      initializeApp({
        appId: process.env.APP_FIRESTORE_APP_ID,
        apiKey: process.env.APP_FIRESTORE_API_KEY,
        projectId: process.env.APP_FIRESTORE_PROJECT_ID,
        authDomain: process.env.APP_FIRESTORE_AUTH_DOMAIN,
        databaseURL: process.env.APP_FIRESTORE_DATABASE_URL,
        storageBucket: process.env.APP_FIRESTORE_STORAGE_BUCKET,
        messagingSenderId: process.env.APP_FIRESTORE_MESSAGING_SENDER_ID,
      }),
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
