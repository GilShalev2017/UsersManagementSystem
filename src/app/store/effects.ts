/*
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadUsers, loadUsersSuccess, selectUser, loadOrders, loadOrdersSuccess } from './actions';
import { catchError, map, switchMap, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from '../services/user.service';
import { User } from './app.state';

@Injectable({
  providedIn: 'root'
})
export class UserEffects {

  loadUsers$: any;
  loadOrders$: any;

  constructor(
    private actions$: Actions,
    private userService: UserService) {
    this.loadUsers$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadUsers),
        switchMap(() =>
          this.userService.getUsers().pipe(
            map(users => {
              console.log('Users from service:', users);
              const entities = users.reduce((acc, user) => {
                acc[user.id] = user;
                return acc;
              }, {} as { [id: number]: User });
              console.log('Transformed entities:', entities); 
              // Dispatch the success action with the transformed entities
              return loadUsersSuccess({ users: entities });
            }),
            catchError(err => of({ type: '[User] Load Users Failure', error: err }))
          )
        )
      ));

    this.loadOrders$ = createEffect(() =>
      this.actions$.pipe(
        ofType(selectUser),
        exhaustMap(action =>
          this.userService.getOrdersForUser(action.userId).pipe(
            map(orders => loadOrdersSuccess({ orders })),
            catchError(err => of({ type: '[Order] Load Orders Failure', error: err }))
          )
        )
      ));
  }
}
*/

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadUsers, loadUsersSuccess, loadOrders, loadOrdersSuccess } from './actions';
import { map, switchMap, of } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class AppEffects {
  
  loadUsers$: any;
  loadOrders$: any;

  constructor(private actions$: Actions, private userService: UserService) {

    this.loadUsers$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadUsers),
        switchMap(() => this.userService.getUsers().pipe(
          map(users => loadUsersSuccess({ users }))
        ))
      )
    );

    this.loadOrders$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadOrders),
        switchMap(() => this.userService.getOrders().pipe(
          map(orders => loadOrdersSuccess({ orders }))
        ))
      )
    );
  }
}
