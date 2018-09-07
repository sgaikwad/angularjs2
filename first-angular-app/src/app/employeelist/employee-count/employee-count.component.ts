import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {

  selectedRadioButtonValue:string='All';

@Output()
countRadioButtonSelectionChanged:EventEmitter<string> = new EventEmitter<string>();

@Input()
all:number;

@Input()
male:number;

@Input()
female:number; 

onRadionButtonSelectionChange(){
  this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
  console.log(this.selectedRadioButtonValue);
}

constructor() { }

  ngOnInit() {
  console.log(this.selectedRadioButtonValue);
  }
}
