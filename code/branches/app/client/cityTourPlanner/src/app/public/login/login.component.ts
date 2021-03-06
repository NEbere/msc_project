// Third party imports
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

// Local imports
import { AuthServiceService } from '../../../services/auth-service.service';

export interface UserAccountDetails {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginCredentials: UserAccountDetails = {
    email: '',
    password: ''
  }

  userAccountDetails: any = {
    firstName: '',
    email: '',
    password: ''
  }

  errorMessage: string
  error: boolean

  constructor(
    private router: Router,
    private authservice: AuthServiceService
  ) { }

  ngOnInit() {
    const user = this.authservice.getUserFromStorage();
      if(user){
        this.router.navigate(['home'])
      }
  }

  async userLogin(loginCredentials: UserAccountDetails){
    const response = await this.authservice.loginUser(loginCredentials)
    
    // User successfully logged in
    if(response) {
      this.router.navigate(['home'])
    }
  }

  async createAccount(userAccountDetails: any){
    const response = await this.authservice.createUser(userAccountDetails)
    
    // User successfully logged in after account created
    if(response) {
      this.router.navigate(['home'])
    }
  }


}
