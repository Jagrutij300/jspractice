import { Component } from '@angular/core';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent {

  Submit(form:any){
    console.log("form obj",form);
    
  }
 
    
  }

