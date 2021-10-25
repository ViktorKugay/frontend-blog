import {Repository} from './database.types';
import {initializeApp} from 'firebase/app';
import {Collection} from '../constants';

import {
  getFirestore,
  Firestore,
  collection,
  getDocs,
  increment,
  CollectionReference,
  DocumentData,
  addDoc,
  updateDoc,
  doc,
  QueryDocumentSnapshot,
  DocumentReference,
} from 'firebase/firestore/lite';

export class FireStoreRepository implements Repository {
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

  public async incrementById(
    collection: Collection,
    id: string,
    key: string,
  ): Promise<void> {
    await updateDoc(this.getDocument(collection, id), {[key]: increment(1)});
  }

  public async save<T>(collection: Collection, entity: T): Promise<T> {
    await addDoc(this.getCollection(collection), entity);

    return entity;
  }

  public async findAll<T>(collection: Collection): Promise<T[]> {
    const {docs} = await getDocs(this.getCollection(collection));

    return docs.map((doc) => this.extractDoc<T>(doc));
  }

  private extractDoc<T>(doc: QueryDocumentSnapshot<DocumentData>): T {
    return {...doc.data(), postId: doc.id} as unknown as T;
  }

  private getDocument(
    repo: string,
    id: string,
  ): DocumentReference<DocumentData> {
    return doc(this.storage, repo, id);
  }

  private getCollection(repo: string): CollectionReference<DocumentData> {
    return collection(this.storage, repo);
  }
}
