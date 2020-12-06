import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';
import { FormControl, FormsModule, FormBuilder, FormGroup, Validators, FormControlDirective} from '@angular/forms';
import { CategoriesService } from './../../../services/categories.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  // CLOSE ADD FORM
  closeResult: string | undefined;
  // ALERTS
  alerts: any;

  // CRETE A CONTAINER VARIABLE
  category: string | undefined;
  categoryName: string | undefined;
  categoryNumber: number | undefined;
  categoryDetail: string | undefined;
  message: string | undefined;

  // tslint:disable-next-line: variable-name
  constructor(
    // tslint:disable-next-line: variable-name
    private _ngZone: NgZone,
    public categoriessevice: CategoriesService,
    private modalService: NgbModal,
    public formbuilder: FormBuilder,
    ) { }

  @ViewChild('autosize')
  autosize!: CdkTextareaAutosize;

  // tslint:disable-next-line: typedef
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  ngOnInit(): void {
    // GET ALL CATEGORY
    this.categoriessevice.getCategory().subscribe(data => {
      this.category = data.map(e => {
        return {
          id: e.payload.doc.id,
          idedit: false,
          name: e.payload.doc.data()['name'],
          number: e.payload.doc.data()['number'],
          detail: e.payload.doc.data()['detail'],
        };
      });
      console.log(this.category);
    });
  }

  // MODAL
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  // END MODAL

  // MESSAGE
  // tslint:disable-next-line: typedef
  close(alert: any) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
  // END MESSAGE


  // CREATE CATEGORY
  // tslint:disable-next-line: typedef
  createRecord() {
    const Record = {};
    Record['name'] = this.categoryName;
    Record['number'] = this.categoryNumber;
    Record['detail'] = this.categoryDetail;

    console.log('Record: ', Record);

    this.categoriessevice.createCategory(Record).then(res => {
      this.categoryName = '';
      this.categoryNumber = undefined;
      this.categoryDetail = '';
      console.log('res: ', res);
      this.message = 'đã thêm thành công';
    }).catch(error => {
      console.log(error);
    })
  }


  // GET RECORD
  EditRecord(Record) {
    Record.idedit = true;
    Record.editname = Record.name;
    Record.editnumber = Record.number;
    Record.editdetail = Record.detail;
  }

  // UPDATE CATEGORY
  Updaterecord(recorddata: { editname: any; editnumber: any; editdetail: any; idedit: any; id: any; }) {
    const record = {};
    record['name'] = recorddata.editname;
    record['number'] = recorddata.editnumber;
    record['detail'] = recorddata.editdetail;
    this.categoriessevice.Updaterecord(recorddata.id, record);
    recorddata.idedit = false;
  }

  // DELETE CATEGORY
  // tslint:disable-next-line: typedef
  Deletecategory( record_id: any, ) {
    this.categoriessevice.DeleteRecord(record_id);
  }

  // VALIDATE

}
