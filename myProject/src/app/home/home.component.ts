import { Component } from '@angular/core';
import { Router } from '@angular/router'; //import section
import { DataService } from '../data.service';

@Component({ //componenet directive : meta data of component
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { // componenet class : property ,constructor, life cycle hook, method, function etc.
       //property section
       //let/or/const city = "pune" var declaration in js
       city : string = "pune"; //property
       sName : any = 989898; // any means any thing number string or anything
      Name : string = "jagruti jadhav";
      Name2! : string; //only declare
      Name3 : any; // any not need to ! declare 
      pipe : boolean=false;
      date: "10/02/2023" = "10/02/2023";

  

  constructor(private router: Router, private dataService : DataService){} // constructor section
  ngOnInit(){
     this.dataService.userName = this.Name;
  }

  //life cycle hook , Methods
  SignUpCompo(){
    this.Name3 = 'OmSai';
    console.log('Name3>>',this.Name3);
    
    console.log("city>>",this.city);
    console.log("signcompo fun calling");
    this.test();
    this.router.navigateByUrl("sign Up");
     }
     test(){
      console.log("test calling...");
      
     }
     directives(){
      this.router.navigateByUrl('directives')
     }
     LifeCyclehooksComponent(){
      this.router.navigateByUrl('LifeCyclehooksComponent')
     }
    purepipe(){
      this.pipe=true;
    }

}
