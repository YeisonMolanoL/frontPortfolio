import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { MessageService } from 'primeng/api';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CrudComponent } from './pages/crud/crud.component';
import { InformativeCustomerComponent } from './pages/informative-customer/informative-customer.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrincipalComponent,
    CrudComponent,
    SpinnerComponent,
    InformativeCustomerComponent,
    CardInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [MessageService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
