import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {

@Input()
all:number;

@Input()
male:number;

@Input()
female:number; 


  constructor() { }

  ngOnInit() {
  }

}
