import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { YagaModule }   from '@yaga/leaflet-ng2';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './public/login/login.component';
import { CreateTourComponent } from './secured/create-tour/create-tour.component';
import { MultiStepFormComponent } from './secured/multi-step-form/multi-step-form.component';
import { ProfileComponent } from './secured/profile/profile.component';
import { LogoutComponent } from './secured/logout/logout.component';
import { TourItenaryComponent } from './secured/tour-itenary/tour-itenary.component';

import { FormatTitlePipe } from '../pipes/format-title.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateTourComponent,
    ProfileComponent,
    LogoutComponent,
    TourItenaryComponent,
    MultiStepFormComponent,
    FormatTitlePipe
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    YagaModule,
    NgbModule// ngBootstrap
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
