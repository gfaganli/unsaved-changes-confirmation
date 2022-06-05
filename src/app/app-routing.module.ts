import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { PendingChangesGuard } from "./pending-changes.guard";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canDeactivate: [PendingChangesGuard]
  },
  {
    path: 'about',
    component: AboutComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
