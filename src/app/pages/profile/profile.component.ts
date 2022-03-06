import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  orders: any = [];
  profileJson: string = null;
  user: any = null;
  showRawProfile = false;


  constructor(public auth: AuthService, public apiService: ApiService) { }

  ngOnInit() {
    this.auth.user$.subscribe(
      (profile) => {
        this.profileJson = JSON.stringify(profile, null, 2);
        this.orders = profile['https://pizza-42-auth0.herokuapp.com/orders'];
        this.user = profile;
      }
    );
  }

  changePassword() {
    const redirectUri = window.location.origin + '/profile';
    this.apiService.changePassword(this.user.sub, redirectUri).subscribe(response => {
      window.location.href = response.ticket;
    }, error => {
      alert('There was a problem attempting to change passwords. If you are logged in with a social account please reset your password with your identity provider.');
    });
  }

  deleteAccount() {
    this.apiService.deleteAccount(this.user.sub).subscribe(response => {
      this.auth.logout();
    }, error => {
      alert('There was a problem attempting to delete your account.');
    });
  }
}
