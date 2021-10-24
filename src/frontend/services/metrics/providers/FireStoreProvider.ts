import {StorageProvider} from './types';
import {initializeApp} from 'firebase/app';
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
      // initializeApp(process.env.FIRESTORE_CREDENTIALS as FirebaseOptions),
      initializeApp({
        apiKey: 'AIzaSyCTNeDdmqEkCbPE00ZNKAjFQXWsHSqBInU',
        authDomain: 'vkugay-4f82b.firebaseapp.com',
        databaseURL: 'https://vkugay-4f82b.firebaseio.com',
        projectId: 'vkugay-4f82b',
        storageBucket: 'vkugay-4f82b.appspot.com',
        messagingSenderId: '974742954660',
        appId: '1:974742954660:web:ecfaaa1c0f841339c6fc31',
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
