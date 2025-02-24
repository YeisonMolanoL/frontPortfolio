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
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { InformationCompleteComponent } from './components/information-complete/information-complete.component';
import { SeeInformationComponent } from './components/see-information/see-information.component';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrincipalComponent,
    CrudComponent,
    SpinnerComponent,
    InformativeCustomerComponent,
    CardInfoComponent,
    ProjectsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    InformationCompleteComponent,
    SeeInformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    DynamicDialogModule
  ],
  providers: [DialogService, MessageService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
