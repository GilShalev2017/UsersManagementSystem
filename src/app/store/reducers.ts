import { createReducer, on } from '@ngrx/store';
import { loadUsersSuccess, selectUser, loadOrdersSuccess } from './actions';
import { AppState } from './app.state';

// Initial States
const initialUsersState: AppState['users'] = {
  entities: {},
  selectedUserId: null,
};

const initialOrdersState: AppState['orders'] = {
  entities: {},
};

// Users Reducer
export const usersReducer = createReducer(
  initialUsersState,
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    entities: users.reduce((entities, user) => ({ ...entities, [user.id]: user }), {}),
  })),
  on(selectUser, (state, { userId }) => ({
    ...state,
    selectedUserId: userId,
  }))
);

// Orders Reducer
export const ordersReducer = createReducer(
  initialOrdersState,
  on(loadOrdersSuccess, (state, { orders }) => ({
    ...state,
    entities: orders.reduce((entities, order) => ({ ...entities, [order.id]: order }), {}),
  }))
);