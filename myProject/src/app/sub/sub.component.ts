import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent {
  //what are subject
  // subject is aspecial type of observable that allows varlues to be multicasted to many 
  // observed because they can subscribe to another observable and get value from it,which 
  // it will multicast to all its subscribers.


  data ="jagruti"
  constructor(private dataService : DataService ) {} 

  ngOnInit(){
    //this.dataService.data.next(this.data);
  }
  setData(){
    this.dataService.data.next(this.data);
  }
   }
