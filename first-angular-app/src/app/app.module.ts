import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeTitle } from './shared/employeeTitle.pipe';
import { EmployeeCountComponent } from './employeelist/employee-count/employee-count.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeelistComponent,
    EmployeeTitle,
    EmployeeCountComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
