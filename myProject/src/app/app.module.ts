import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { LifeCyclehooksComponent } from './life-cyclehooks/life-cyclehooks.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Sub1Component } from './sub1/sub1.component';
import { SubComponent } from './sub/sub.component';
import { Sub2Component } from './sub2/sub2.component';
import { SearchPipe } from './search.pipe';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { SignUpReactiveFormComponent } from './sign-up-reactive-form/sign-up-reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    DatabindingComponent,
    DirectivesComponent,
    LifeCyclehooksComponent,
    ParentComponent,
    ChildComponent,
    Sub1Component,
    SubComponent,
    Sub2Component,
    SearchPipe,
    TemplatedrivenComponent,
    SignUpReactiveFormComponent,
    FormsModule,
    ReactiveFormsModule,
    //other modules
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
