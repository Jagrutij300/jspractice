import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  // user:string="Admin";


// *ngif directive: the ngif allows us to add/Remove Dom element
city ="pune"
  isShow = false; // null/undefined/false >>false 

  //*ngFor any element portion repeat again and again sho won dom so we used *ngFor
  cars = ["i10","i20","swift","maruti"];
  showDiv = true;

  // toggle show on click hide and on click again show on dom
  toggle(){
    //this.showDiv="false";
    this.showDiv = !this.showDiv; //!T >>F if>>t
  }

  // *ngSwitch
  fruits = "mango";

  //ngClass
  user:string="Admin";

  //ngStyle

}
