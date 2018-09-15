import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeTitle } from './shared/employeeTitle.pipe';
import { EmployeeCountComponent } from './employeelist/employee-count/employee-count.component';
import { EmployeeService } from './shared/employee.service';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './others/pagenotfound/pagenotfound.component';


const appRoutes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'employees',component:EmployeelistComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeelistComponent,
    EmployeeTitle,
    EmployeeCountComponent,
    HomeComponent,
    PagenotfoundComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers:[EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

