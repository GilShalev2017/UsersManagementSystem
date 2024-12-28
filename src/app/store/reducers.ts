/*
import { createReducer, on } from '@ngrx/store';
import { loadUsersSuccess, selectUser, loadOrdersSuccess } from './user.actions';
import { AppState, Order, User } from './app.state';

export const initialState: AppState = {
    users: {
        entities: {},
        selectedUserId: null
    },
    orders: {
        entities: {}
    }
};

export const userReducer = createReducer(
    initialState,
    on(loadUsersSuccess, (state, { users }: { users: { [id: number]: User } }) => {
        console.log('Previous state:', state);
        const newState = {
            ...state,
            users: {
                entities: {...users},
                selectedUserId: state.users.selectedUserId
            }
        };
        console.log('State after update:', newState);
        return newState;
    }),
    on(selectUser, (state, { userId }) => ({
        ...state,
        users: { 
            ...state.users, 
            selectedUserId: userId 
        }
    })),
    on(loadOrdersSuccess, (state, { orders }) => ({
        ...state,
        orders: {
            entities: orders.reduce((entities, order) => {
                entities[order.id] = order;
                return entities;
            }, {} as { [id: number]: Order })
        }
    }))
);


console.log('Initial state:', initialState);
*/

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