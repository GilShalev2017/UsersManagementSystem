import { createAction, props } from '@ngrx/store';
import { Order, User } from './app.state';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction(
    '[User] Load Users Success',
    props<{ users: { [id: number]: User } }>() 
);
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: string }>());
export const selectUser = createAction('[User] Select User', props<{ userId: number }>());
export const loadOrders = createAction('[Order] Load Orders', props<{ userId: number }>());
export const loadOrdersSuccess = createAction('[Order] Load Orders Success', props<{ orders: Order[] }>());
