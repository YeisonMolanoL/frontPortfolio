import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { CrudComponent } from './pages/crud/crud.component';
import { InformativeCustomerComponent } from './pages/informative-customer/informative-customer.component';

export const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'info', component: InformativeCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
