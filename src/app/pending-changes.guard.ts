import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmationModalComponent } from "./confirmation-modal/confirmation-modal.component";

export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable()
export class PendingChangesGuard
  implements CanDeactivate<ComponentCanDeactivate>
{
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  canDeactivate(
    component: ComponentCanDeactivate
  ): boolean | Observable<boolean> {
    // if there are no pending changes, just allow deactivation; else confirm first
    return component.canDeactivate() ? true : this.openConfirmationModal();
  }

  private openConfirmationModal() {
    const modalConfig = { animated: true };

    this.bsModalRef = this.modalService.show(
      ConfirmationModalComponent,
      Object.assign({}, modalConfig, { class: 'modal-md' })
    );
    return this.bsModalRef.content.onClose.pipe(
      map((confirmed) => {
        return confirmed;
      })
    );
  }
}
