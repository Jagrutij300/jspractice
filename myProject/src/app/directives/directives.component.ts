import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  // user:string="Admin";


  constructor(private dataservice : DataService){}


// *ngif directive: the ngif allows us to add/Remove Dom element
city ="pune"
  isShow = false; // null/undefined/false >>false 
  searchText:any;
  //*ngFor any element portion repeat again and again sho won dom so we used *ngFor
  cars = ["i10","i20","swift","maruti"];
  showDiv = true;
  tableHeading = ["Name","Contact","City","age"];
  tableData = [
    {name:"pooja", contact:56678999 , city:"pune" , age:20},
    {name:"om", contact:56678999 , city:"satara" , age:20},
    {name:"sahil", contact:56678999 , city:"mumbai" , age:20},
    {name:"navaj", contact:56678999 , city:"roha" , age:20},
    {name:"pawan", contact:56678999 , city:"kolad" , age:20},
    {name:"pranav", contact:56678999 , city:"jalgaoan" , age:20},
    {name:"pranay", contact:56678999 , city:"damkhadi" , age:20},
    {name:"gaurav", contact:56678999 , city:"pali" , age:20},
    {name:"sayali", contact:56678999 , city:"vave" , age:20},
    {name:"shraddha", contact:56678999 , city:"pen" , age:20},]
  toggle(){
    //this.showDiv="false";
    this.showDiv = !this.showDiv; //!T >>F if>>t
  }

  // *ngSwitch
  fruits = "mango";

  //ngClass
  user:string="Admin";

  //ngStyle


  getData (){
    this.user = this.dataservice.userName;

  }

}
