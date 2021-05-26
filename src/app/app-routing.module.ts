import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppareilViewComponentComponent } from './appareil-view-component/appareil-view-component.component';

import { BlogComponentComponent } from './blog-component/blog-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes = [
  { path: 'blogs', component: BlogComponentComponent },
  { path: 'home', component: HomeComponentComponent },
  { path: 'devices', component: AppareilViewComponentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }