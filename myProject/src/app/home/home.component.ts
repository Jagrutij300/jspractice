import { Component } from '@angular/core';
import { Router } from '@angular/router'; //import section

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
      Name : string = "jagruti";
      Name2! : string; //only declare
      Name3 : any; // any not need to ! declare



  constructor(private router: Router){} // constructor section

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
     

}
