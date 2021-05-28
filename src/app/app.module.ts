import { IsAuthGuard } from './services/is-auth-guard.service';
import { AuthService } from './services/auth-service.service';
import { DeviceService } from './services/device-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './AppComponent/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import { BlogComponentComponent } from './blog-component/blog-component.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ErrorComponent } from './error/error.component';
import { OneAppareilViewComponent } from './one-appareil-view/one-appareil-view.component';
import { AppareilModule } from './appareil-view-component/appareil.module';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    BlogComponentComponent,
    HomeComponentComponent,
    ErrorComponent,
    OneAppareilViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    //CUSTOM MODULE
    AppareilModule,
  ],
  providers: [DeviceService, AuthService, IsAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
