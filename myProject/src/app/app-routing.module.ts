import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { LifeCyclehooksComponent } from './life-cyclehooks/life-cyclehooks.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { SubComponent } from './sub/sub.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';


const routes: Routes = [
  { path : '' , component : HomeComponent},
 { path:'login', component : LoginComponent},
{ path :'sign Up', component : SignUpComponent},
{path : 'databinding', component : DatabindingComponent},
{path : 'directives', component : DirectivesComponent},
{path : "LifeCyclehooksComponent", component : LifeCyclehooksComponent},
{path : "ChildComponent", component : ChildComponent},
{path : "ParentComponent", component : ParentComponent },
{path : "Subject", component : SubComponent },
{path : "Subject1", component : Sub1Component  },
{path : "Subject2", component : Sub2Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
