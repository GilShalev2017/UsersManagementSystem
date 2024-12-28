/*
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
}
*/
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User, Order } from './app.state';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers() {
    const mockUsers: User[] = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Alice' },
      { id: 4, name: 'Bob' },
      { id: 5, name: 'Charlie' }
    ];
    return of(mockUsers);
  }

  getOrders() {
    //TODO add timeout to demonstrate long calls
    const mockOrders: Order[] = [
      { id: 1, userId: 1, total: 100 },
      { id: 2, userId: 1, total: 50 },
      { id: 3, userId: 2, total: 200 },
    ];
    return of(mockOrders);
  }
}
