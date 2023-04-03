import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './pages/customer/customer.component';
import { SalerComponent } from './pages/saler/saler.component';

const routes: Routes = [
  {path: '', component : CustomerComponent},
  {path: 'saler', component : SalerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
