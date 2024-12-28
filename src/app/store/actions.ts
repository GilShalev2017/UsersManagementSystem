import { createAction, props } from '@ngrx/store';
import { Order, User } from './app.state';

// User Actions
export const loadUsers = createAction('[User API] Load Users');
export const loadUsersSuccess = createAction('[User API] Load Users Success', props<{ users: User[] }>());
export const selectUser = createAction('[User] Select User', props<{ userId: number | null }>());

// Order Actions
export const loadOrders = createAction('[Order API] Load Orders'); //instead of props<{ users: { [id: number]: User } }>
export const loadOrdersSuccess = createAction('[Order API] Load Orders Success', props<{ orders: Order[] }>());
