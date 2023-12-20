import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-life-cyclehooks',
  templateUrl: './life-cyclehooks.component.html',
  styleUrls: ['./life-cyclehooks.component.css']
})
export class LifeCyclehooksComponent {
  Name:any;//normal prop
  @Input () surName:any;//input property
  constructor(private dataService : DataService ) {
    console.log("constructor calling...");

  }
  //defination of LifeCyclehooks : a component instanat has a lufecycle that satart when angular instantiates the component class and renders the componenets view and its chiled view
  //1. ngOnchagee() if componenet having @ input property then ngonchnages get triger
  //2.ngOnit() normal input propert that time ngonit property get triger
  //3.ondocheack()
  //4. ngAftercontainit()
  //5. ngAftercontantcheaked()
  //6. ngAfterviewinit
  //7. ngAfterviewcheaked
  //8. ngonDestroyg
  ngOnchanges() {
    console.log("ngOnchanges calling");

  }
  ngOnInit(
    ) {
      this.Name = this.dataService.userName ;
    console.log("ngOninit calling");
  }
  ngDoCheck() {
    console.log("ngDoCheack calling");
  }
  onAfterContentInit() {
    console.log("onAfterContentInit calling");

  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked calling");

  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit calling");

  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked calling");

  }
  ngOnDestroy() {
    console.log("ngOnDestroy calling");

  }
}
