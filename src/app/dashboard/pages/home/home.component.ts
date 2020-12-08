import { Component, OnInit } from '@angular/core';
import { VietnameseService } from '../../../services/vietnamese.service';
import { JapaneseService } from '../../../services/japanese.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // CRETE A CONTAINER VARIABLE
  vietnamese: string | undefined;
  japanese: string | undefined;

  constructor(
    public  vietnameseservice: VietnameseService,
    public japaneseservice: JapaneseService,
  ) { }

  ngOnInit(): void {
    // GET ALL VIETNAMESE
    this.vietnameseservice.getVietnamese().subscribe(data => {
      this.vietnamese = data.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data().name,
          number: e.payload.doc.data().number,
          price: e.payload.doc.data().price,
          detail: e.payload.doc.data().detail,
          athor: e.payload.doc.data().athor,
          images: e.payload.doc.data().images,
        };
      });
      console.log(this.vietnamese);
    });

    // GET ALL CATEGORY
    this.japaneseservice.getJapanese().subscribe(data => {
      this.japanese = data.map(e => {
        return {
          id: e.payload.doc.id,
          idedit: false,
          name: e.payload.doc.data().name,
          number: e.payload.doc.data().number,
          price: e.payload.doc.data().price,
          detail: e.payload.doc.data().detail,
          athor: e.payload.doc.data().athor,
          images: e.payload.doc.data().images,
        };
      });
      console.log(this.japanese);
    });
  }

}
