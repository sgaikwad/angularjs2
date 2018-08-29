import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageHeader:string="Employee Header";
  imagePath:string="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg";
  isDisabled:boolean=false;
  name:string="Tom";


onClick():void{
   console.log("I am clicked");
}

}
