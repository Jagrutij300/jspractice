import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { LifeCyclehooksComponent } from './life-cyclehooks/life-cyclehooks.component';

const routes: Routes = [
  { path : '' , component : HomeComponent},
 { path:'login', component : LoginComponent},
{ path :'sign Up', component : SignUpComponent},
{path : 'databinding', component : DatabindingComponent},
{path : 'directives', component : DirectivesComponent},
{path : "LifeCyclehooksComponent", component : LifeCyclehooksComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
