import { Component, OnInit } from '@angular/core';
import { JapaneseService } from '../../../services/japanese.service';


@Component({
  selector: 'app-southtwo',
  templateUrl: './southtwo.component.html',
  styleUrls: ['./southtwo.component.css']
})
export class SouthtwoComponent implements OnInit {
  // CRETE A CONTAINER VARIABLE
  japanese: string | undefined;

  constructor(
    public japaneseservice: JapaneseService,
  ) { }

  ngOnInit(): void {
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
