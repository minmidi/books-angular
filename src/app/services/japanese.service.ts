import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class JapaneseService {

  constructor(public fireservice: AngularFirestore) { }

  // tslint:disable-next-line: typedef
  getJapanese(){
    return this.fireservice.collection('japanese').snapshotChanges();
  }


  // tslint:disable-next-line: typedef
  createJapanese(Record: unknown)
  {
    return this.fireservice.collection('japanese').add(Record);
  }

  // tslint:disable-next-line: typedef
  Updaterecord(recordid: any, record: {})
  {
    this.fireservice.doc('japanese/' + recordid).update(record);
  }

  // tslint:disable-next-line: typedef
  // tslint:disable-next-line: variable-name
  DeleteRecord(record_id: string | undefined) {
    this.fireservice.doc('japanese/' + record_id).delete();
  }
}
