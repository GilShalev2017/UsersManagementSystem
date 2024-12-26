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
        console.log('Reducer received users:', users);

        console.log('Previous state:', state);

        const newState = {
            ...state,
            users: {
                ...state.users, 
                entities: users 
            }
        };

        console.log('State after update:', newState);
        return newState;
    }),
    on(selectUser, (state, { userId }) => ({
        ...state,
        users: { ...state.users, selectedUserId: userId }
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