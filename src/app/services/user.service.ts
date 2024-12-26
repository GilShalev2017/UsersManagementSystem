import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, Order } from '../store/app.state';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor() {}
  
  getUsers(): Observable<User[]> {
    const users: User[] = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' }
    ];
    return of(users);
  }

  getOrdersForUser(userId: number): Observable<Order[]> {
    const orders: Order[] = [
      { id: 1, userId: 1, total: 100 },
      { id: 2, userId: 1, total: 150 },
      { id: 3, userId: 2, total: 200 },
      { id: 4, userId: 3, total: 50 },
    ].filter(order => order.userId === userId);
    return of(orders);
  }
}
