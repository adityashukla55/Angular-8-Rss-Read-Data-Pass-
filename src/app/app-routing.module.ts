import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ShowdataComponent } from './showdata/showdata.component';


const routes: Routes = [
{ path:'add-employees', component: AddEmployeeComponent},
{ path:'add-employees/:url', component: EmployeeComponent},
{ path:'showdata', component: ShowdataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
