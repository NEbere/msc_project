import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

import { HomePage } from './home/home.page';
import { CreateTourComponent } from './secured/create-tour/create-tour.component';
import { ProfileComponent } from './secured/profile/profile.component';
import { TourItenaryComponent } from './secured/tour-itenary/tour-itenary.component';
import { LogoutComponent } from './secured/logout/logout.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  pages: Array<{ title: string, component: any, link: string, }>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menu: MenuController
  ) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage, link: 'home' },
      { title: 'Create Tour', component: CreateTourComponent, link: 'create' },
      { title: 'Profile', component: ProfileComponent, link: 'profile' },
      { title: 'Logout', component: LogoutComponent, link: 'logout' }
      // { title: 'Tour Itinerary', component: TourItenaryComponent, link: 'itinerary' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(link) {
    this.router.navigate([`/${link}`])
  }

  closeMenu() {
    this.menu.close()
  }
}
