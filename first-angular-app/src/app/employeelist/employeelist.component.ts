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

selectedEmployeeCountRadioButton:string="All";

  constructor(private employeeService:EmployeeService) {
    
  }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }


getTotalEmployeeCount():number{
  return  this.employeeService.getEmployees().length;
}

getTotalMaleEmployeeCount():number{
  return this.employeeService.getEmployees().filter(e=>e.gender==="Male").length;
}

getTotalFeMaleEmployeeCount():number{
  return this.employeeService.getEmployees().filter(e=>e.gender==="Female").length;
}

onSelectedEmployeeRadioButtonChange(selectedRadioButtonValue:string):void{
  this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
}

}
