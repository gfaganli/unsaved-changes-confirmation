import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {

  public onClose: Subject<boolean> = new Subject();

  constructor(protected bsModalRef: BsModalRef) {}

  ngOnInit(): void {}

  confirm(): void {
    this.onClose.next(true);
    this.bsModalRef.hide();
  }

  cancel(): void {
    this.onClose.next(false);
    this.bsModalRef.hide();
  }

}
