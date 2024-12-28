import { createSelector } from '@ngrx/store';

export const selectUsers = createSelector(
    (state: any) => state.users,
    (usersState) => usersState?.users?.entities
    // || {} // Handle potential undefined state or usersState
);