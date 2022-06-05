import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from "./app-routing.module";
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { HomeComponent } from './home/home.component';
import { PendingChangesGuard } from "./pending-changes.guard";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { PopoverModule } from "ngx-bootstrap/popover";
import { ModalModule } from "ngx-bootstrap/modal";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ConfirmationModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule,
    PopoverModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [PendingChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
