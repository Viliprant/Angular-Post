import { OneAppareilViewComponent } from './one-appareil-view/one-appareil-view.component';
import { IsAuthGuard } from './services/is-auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponentComponent } from './blog-component/blog-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AppareilViewComponentComponent } from './appareil-view-component/appareil-view-component.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'blogs', component: BlogComponentComponent, canActivate: [IsAuthGuard] },
  { path: 'home', component: HomeComponentComponent },
  // { path: 'devices2', component: AppareilViewComponentComponent, canActivate: [IsAuthGuard]}, // tester l'unicité du DeviceService
  { 
    path: 'devices',
    loadChildren: () => import('./appareil-view-component/appareil.module').then(m => m.AppareilModule),
    canActivate: [IsAuthGuard]
  },
  { path: 'devices/:name', component: OneAppareilViewComponent, canActivate: [IsAuthGuard]},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }