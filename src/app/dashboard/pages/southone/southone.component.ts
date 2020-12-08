import { Component, OnInit } from '@angular/core';
import { VietnameseService } from '../../../services/vietnamese.service';


@Component({
  selector: 'app-southone',
  templateUrl: './southone.component.html',
  styleUrls: ['./southone.component.css']
})
export class SouthoneComponent implements OnInit {
  // CRETE A CONTAINER VARIABLE
 vietnamese: string | undefined;

  constructor(
    public  vietnameseservice: VietnameseService,

  ) { }

  ngOnInit(): void {
    // GET ALL VIETNAMESE
    this.vietnameseservice.getVietnamese().subscribe(data => {
      this.vietnamese = data.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data().name,
          number: e.payload.doc.data().number,
          detail: e.payload.doc.data().detail,
          athor: e.payload.doc.data().athor,
          images: e.payload.doc.data().images,
        };
      });
      console.log(this.vietnamese);
    });
  }

}
