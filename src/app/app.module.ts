import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { SalerComponent } from './pages/saler/saler.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DashboardSalerComponent } from './components/dashboard-saler/dashboard-saler.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterCustomersPipe } from './pipes/filter-customers.pipe';
import { FocusDirectiveDirective } from './directives/focus-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    SalerComponent,
    NavigationComponent,
    DashboardComponent,
    DashboardSalerComponent,
    GlobalErrorComponent,
    FilterPipe,
    FilterCustomersPipe,
    FocusDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
