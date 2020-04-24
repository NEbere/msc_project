import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './public/login/login.component';
import { LogoutComponent } from './secured/logout/logout.component';
import { CreateTourComponent } from './secured/create-tour/create-tour.component'
import { MultiStepFormComponent } from './secured/multi-step-form/multi-step-form.component'
import { ProfileComponent } from './secured/profile/profile.component';
import { TourItenaryComponent } from './secured/tour-itenary/tour-itenary.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'create', component: CreateTourComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'itinerary', component: TourItenaryComponent },
  { path: 'form', component: MultiStepFormComponent },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
