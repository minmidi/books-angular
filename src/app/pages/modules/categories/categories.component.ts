import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  heros = [
    {
      id: 1,
      first: 'Lê',
      last: 'Trường',
      handle: 'Giang',
    },
    {
      id: 1,
      first: 'Lê',
      last: 'Thị',
      handle: 'Hiền',
    },
    {
      id: 1,
      first: 'Lê',
      last: 'Quỳnh',
      handle: 'Trang',
    }
  ]

  // tslint:disable-next-line: variable-name
  constructor(private _ngZone: NgZone) { }
  @ViewChild('autosize')
  autosize!: CdkTextareaAutosize;

  // tslint:disable-next-line: typedef
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  ngOnInit(): void {
  }

}
