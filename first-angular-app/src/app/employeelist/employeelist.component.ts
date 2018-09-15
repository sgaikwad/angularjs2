import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../shared/IEmployee';
import { EmployeeService } from '../shared/employee.service';


@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employees: IEmployee[];
  employee: any;
  statusMessage:string='Loading data.Please wait..!!';

selectedEmployeeCountRadioButton:string="All";

  constructor(private employeeService:EmployeeService) {
    
  }

  ngOnInit() {
    this.employeeService.getEmployees()
    .subscribe(employeeData=>this.employees = employeeData,
    error=>this.statusMessage="Problem with service, please try after sometime.");
  }


getTotalEmployeeCount():number{
  return  this.employees.length;
}


getTotalMaleEmployeeCount():number{
  return this.employees.filter(e=>e.Gender==="Male").length;
} 


getTotalFeMaleEmployeeCount():number{
  return this.employees.filter(e=>e.Gender==="Female").length;
}


onSelectedEmployeeRadioButtonChange(selectedRadioButtonValue:string):void{
  this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
}

getEmployeeById():any{
 this.employeeService.getEmployeeById("emp001").subscribe(employeeData=>this.employee == employeeData);

console.log(this.employee);

 return this.employee;
}

}
