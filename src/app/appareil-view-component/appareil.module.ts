import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AppareilViewComponentComponent } from './appareil-view-component.component';
import { AppareilComponent } from './../appareil/appareil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: '', component: AppareilViewComponentComponent}
]

@NgModule({
  declarations: [
    AppareilViewComponentComponent,
    AppareilComponent,
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppareilViewComponentComponent]
})
export class AppareilModule { }
