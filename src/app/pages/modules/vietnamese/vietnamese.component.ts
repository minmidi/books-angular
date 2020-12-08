import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';
import { FormControl, FormsModule, FormBuilder, FormGroup, Validators, FormControlDirective} from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { VietnameseService } from './../../../services/vietnamese.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vietnamese',
  templateUrl: './vietnamese.component.html',
  styleUrls: ['./vietnamese.component.css']
})
export class VietnameseComponent implements OnInit {

  // CLOSE ADD FORM
  closeResult: string | undefined;
  // ALERTS
  alerts: any;

  // CRETE A CONTAINER VARIABLE
 vietnamese: string | undefined;
 vietnameseName: string | undefined;
 vietnameseNumber: number | undefined;
 vietnameseDetail: string | undefined;
 vietnameseAthor: string | undefined;
 vietnameseImageUrl: string | undefined;
 message: string | undefined;
 firstname: any;


  constructor(
    // tslint:disable-next-line: variable-name
    private _ngZone: NgZone,
    public  vietnameseservice: VietnameseService,
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
    this.vietnameseservice.getVietnamese().subscribe(data => {
      this.vietnamese = data.map(e => {
        return {
          id: e.payload.doc.id,
          idedit: false,
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

  // MODAL
  // tslint:disable-next-line: typedef
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


   // CREATE
  // tslint:disable-next-line: typedef
  createRecord() {
    const Record = {};
    Record['name'] = this.vietnameseName;
    Record['number'] = this.vietnameseNumber;
    Record['detail'] = this.vietnameseDetail;
    Record['athor'] = this.vietnameseAthor;
    Record['images'] = this.vietnameseImageUrl;

    console.log('Record: ', Record);

    this.vietnameseservice.createVietnamese(Record).then((res: any) => {
      this.vietnameseName = '';
      this.vietnameseNumber = undefined;
      this.vietnameseDetail = '';
      this.vietnameseAthor = '';
      this.vietnameseImageUrl = '';
      console.log('res: ', res);
      this.message = 'đã thêm thành công';
    }).catch(error => {
      console.log(error);
    });
  }

   // GET RECORD
   EditRecord(Record) {
    Record.idedit = true;
    Record.editname = Record.name;
    Record.editnumber = Record.number;
    Record.editdetail = Record.detail;
    Record.editathor = Record.athor;
    Record.editimage = Record.images;
  }

   // UPDATE CATEGORY
   Updaterecord(recorddata: { editname: any; editnumber: any; editdetail: any; editathor: any; editimage: any; idedit: any; id: any; }) {
    const record = {};
    record['name'] = recorddata.editname;
    record['number'] = recorddata.editnumber;
    record['detail'] = recorddata.editdetail;
    record['athor'] = recorddata.editathor;
    record['images'] = recorddata.editimage;
    this.vietnameseservice.Updaterecord(recorddata.id, record);
    recorddata.idedit = false;
  }

  // DELETE CATEGORY
  // tslint:disable-next-line: typedef
  Deletecategory( record_id: any, ) {
    Swal.fire({
      title: 'Bạn có chắc chắn muốn xóa danh mục?',
      text: 'Nếu bạn thực hiện này dữ liệu sẽ mất và không thể phục hồi!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Tiếp tục!',
      cancelButtonText: 'Thoát'
    }).then((result) => {
      if (result.value) {
      this.vietnameseservice.DeleteRecord(record_id);
      Swal.fire(
          'Đã xóa!',
          'Danh mục đã được xóa khỏi danh sách.',
          'success'
        );
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cảnh báo',
          'Không thể thực hiện xóa danh mục do lỗi',
          'error'
        );
      }
    });
  }




}
