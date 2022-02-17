import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  OrderJson: string = null;
  public pizzas: any = null;
  constructor(public auth: AuthService, public apiService: ApiService) {}

  ngOnInit() {
    this.auth.user$.subscribe(
      (Order) => (this.OrderJson = JSON.stringify(Order, null, 2))
    );
    this.apiService.getPizzas().subscribe(
      res => {
        this.pizzas = res;
      }
    );
  }
}
