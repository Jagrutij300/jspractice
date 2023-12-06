import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
// *ngif directive: the ngif allows us to add/Remove Dom element
city ="pune"
  isShow = false; // null/undefined/false >>false 

  //*ngFor
  cars = ["i10","i20","swift","maruti"];
  showDiv = true;
  toggle(){
    //this.showDiv="false";
    this.showDiv = !this.showDiv; //!T >>F if>>t
  }
}
