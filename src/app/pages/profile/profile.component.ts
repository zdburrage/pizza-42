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


  constructor(public auth: AuthService, public apiService: ApiService) {}

  ngOnInit() {
    this.auth.user$.subscribe(
      (profile) =>
       {this.profileJson = JSON.stringify(profile, null, 2);
        this.orders = profile['https://pizza-42-auth0.herokuapp.com/orders'];
        this.user = profile;
      }
    );
  }

  changePassword() {
    this.apiService.changePassword(this.user.sub).subscribe(response => {
      window.location.href = response.ticket;
    });
  }
}
