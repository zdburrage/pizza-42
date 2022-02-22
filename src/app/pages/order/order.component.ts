import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import {ApiService} from '../../api.service';
import { concatMap, tap, pluck, switchMap } from 'rxjs/operators';

// Import the HttpClient for making API requests
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  public user: User = null;
  public pizzas: any = null;
  public orders: any = [];
  public selectedPizzas: any = [];
  metadata: any = {};
  constructor(public auth: AuthService, public apiService: ApiService, private http: HttpClient) {}

  ngOnInit() {
    this.auth.user$.subscribe(
      (user) => {
        this.user = user;
        this.orders = user['https://pizza-42-auth0.herokuapp.com/orders'];
      }
    );

    // this.auth.user$
    // .pipe(
    //   switchMap((user) => {
    //     this.user = user;
    //     return of(user);
    //   }),
    //   concatMap((user) =>
    //             // Use HttpClient to make the call
    //      this.http.get(
    //       encodeURI(`https://dev-aam3gkbf.us.auth0.com/api/v2/users/${user.sub}`)
    //     )
    //   ),
    //   pluck('user_metadata'),
    //   tap((meta) => {
    //     this.metadata = meta;
    //   })
    // )
    // .subscribe(res => {
    //   this.orders = this.metadata.orders;
    // });
    this.apiService.getPizzas().subscribe(
      res => {
        this.pizzas = res.pizzas;
      }
    );
  }

  public orderPizza(sub: string, order?: any) {
    let totalPrice;
    if (this.selectedPizzas.length > 1) {
      totalPrice = this.selectedPizzas.reduce( (a, b) => a + b.price, 0);
    } else if (this.selectedPizzas.length === 1) {
      totalPrice = this.selectedPizzas[0].price;
    } else {
      totalPrice = 0;
      this.pizzas = ['None; Empty Order'];
    }
    order = {
      pizzas: this.selectedPizzas.map(x => x.type),
      date: new Date(),
      price: totalPrice
    };
    const newOrders = this.orders;
    newOrders.push(order);
    this.apiService.orderPizza(sub, newOrders).subscribe();
  }

  public verifyEmail() {
    this.apiService.verifyEmail(this.user.sub).subscribe(res => {
      console.log(res);
    });
  }
}
