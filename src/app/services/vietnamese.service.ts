import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VietnameseService {

  constructor(public fireservice: AngularFirestore) { }

  // tslint:disable-next-line: typedef
  getVietnamese(){
    return this.fireservice.collection('vietnamese').snapshotChanges();
  }


  // tslint:disable-next-line: typedef
  createVietnamese(Record: unknown)
  {
    return this.fireservice.collection('vietnamese').add(Record);
  }

  // tslint:disable-next-line: typedef
  Updaterecord(recordid: any, record: {})
  {
    this.fireservice.doc('vietnamese/' + recordid).update(record);
  }

  // tslint:disable-next-line: typedef
  DeleteRecord(record_id: string | undefined) {
    this.fireservice.doc('vietnamese/' + record_id).delete();
  }
}
