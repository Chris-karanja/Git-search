import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { GitgetterService } from './gitgetter.service';

// import { AppRoutingModule, routingComponents } from './app-routing.module';


import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';

import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    routingComponents,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [GitgetterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
