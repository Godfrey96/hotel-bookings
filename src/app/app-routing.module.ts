import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'make-reservation', pathMatch: 'full'},
  {path: 'make-reservation', component: EditDetailsComponent},
  {path: 'app-card-details', component: CardDetailsComponent},
  {path: 'app-display-details', component: DisplayDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
