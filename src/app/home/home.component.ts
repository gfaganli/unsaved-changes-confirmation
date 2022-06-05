import { Component, HostListener } from '@angular/core';
import { Observable } from "rxjs";
import { ComponentCanDeactivate } from "../pending-changes.guard";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements ComponentCanDeactivate{

  // @HostListener allows us to also guard against browser refresh, close, etc.
  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {
    // insert logic to check if there are pending changes here;
    if (this.hasUnsavedChanges()) {
      return false;
    } else return true;
    // returning true will navigate without confirmation
    // returning false will show a confirm dialog before navigating away
  }

  private hasUnsavedChanges(): boolean {
    return true;
  }

}
