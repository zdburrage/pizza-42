import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  public user: User;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.user$.subscribe(
      (profile) => {
        this.user = profile;
      }
    );
  }

}
