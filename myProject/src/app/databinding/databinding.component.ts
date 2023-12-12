import { Interpolation } from '@angular/compiler';
import { Component, HostBinding } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  //data binding : communication betwwen component and DOM.
  // 1. one_way data binding : simple way
  // 1. string Interpolation {{}}
  // string interpolationis one way databining technique which is used display data from typescript to view in DOM using {{}}
  // 2. property binding []
  // 3. event binding ()  
  // 2. two way data binding


  data : any = "we are learning string interpolation";
  amount : number = 900000;
  schoolName! : string ;
// x=7;
ClickEventData:any;
name = "jagruti...";
city:any ="satara";
constructor(private dataService : DataService , private router : Router){}


  isMatch =true;
  test(){
    return 50;
  }
  ClickEvent(){
  this.ClickEventData = 989898;
  }
  assignval(){
    this.dataService.userName = "Ajay";
    this.router.navigateByUrl("lifecycleHooks")
  }
}
