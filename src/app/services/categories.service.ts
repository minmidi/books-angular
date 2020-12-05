import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(public fireservice: AngularFirestore) { }

  // tslint:disable-next-line: typedef
  getCategory(){
    return this.fireservice.collection('category').snapshotChanges();
  }


  // tslint:disable-next-line: typedef
  createCategory(Record: unknown)
  {
    return this.fireservice.collection('category').add(Record);
  }

  // tslint:disable-next-line: typedef
  Updaterecord(recordid: any, record: {})
  {
    this.fireservice.doc('category/' + recordid).update(record);
  }

  // tslint:disable-next-line: typedef
  DeleteRecord(record_id: string | undefined) {
    this.fireservice.doc('category/' + record_id).delete();
  }
}
