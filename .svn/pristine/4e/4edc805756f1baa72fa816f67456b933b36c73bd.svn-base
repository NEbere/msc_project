// Third party imports
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

// Local imports
import { AuthServiceService } from '../../services/auth-service.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  userProfile: any = {}

  constructor(
    private authservice: AuthServiceService,
    private router: Router,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    // console.log(this.router.getCurrentNavigation().extras.state, 'this os from itinerary page');
    const user = this.authservice.getUserFromStorage();

    if (!user) {
      this.router.navigate(['login'])
    } else {
      this.getUserProfile()
    }
  }

  async getUserProfile() {
    let loader = await this.loadingController.create({
      message: 'Please wait...'
    });
    loader.present();

    this.authservice.getUserProfile()
      .then(response => {
        loader.dismiss()
        this.userProfile = response.user;

      })
      .catch(error => {
        const { status, statusText } = error;

        if (status == 401 && statusText == 'Unauthorized') {
          localStorage.removeItem('user');
          this.router.navigate(['login'])
        } else {
          console.log(error, 'Error getting user profile');

          // throw Error(error)
        }
      });
  }

  goToCreateTour(){
    this.router.navigate(['create'])
  }
}
