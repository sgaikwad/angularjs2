import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  firstName: string = "Tom";
  lastName: string = "Hoplins";
  gender: string = "Male";
  age: number = 20;
  constructor() { }

  ngOnInit() {
  }
  toggleDetails():void{
  }
}
