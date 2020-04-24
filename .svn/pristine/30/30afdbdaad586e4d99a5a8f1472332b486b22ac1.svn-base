import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Local imports
import { AuthServiceService } from '../../../services/auth-service.service';
import { User } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})

export class ProfileComponent implements OnInit {

  constructor(
    private authservice: AuthServiceService,
    private modalService: NgbModal
  ) { }

  user: User = {
    email: '',
    password: ''
  }

  ngOnInit() {
    this.getUserProfile();
  }

  async getUserProfile() {
    const userProfile = await this.authservice.getUserProfile();
    this.user = userProfile.user;
  }

  async editProfile(user) {
    const response = await this.authservice.updateUserProfile(user);
    if(response.status = 200) {
      window.location.reload()
    }
  }

  open(content) {
    this.modalService.open(content)
  }

}
