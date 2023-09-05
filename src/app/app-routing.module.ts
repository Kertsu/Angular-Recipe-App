import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  {
    path:'', component:LayoutComponent,
    children:[
      {path: '', redirectTo:'/home', pathMatch:'full'},
      {path: 'home', component:HomeComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
