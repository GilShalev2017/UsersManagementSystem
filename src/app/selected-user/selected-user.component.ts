import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, User } from '../store/app.state';

@Component({
  selector: 'app-selected-user',
  templateUrl: './selected-user.component.html',
  styleUrl: './selected-user.component.scss',
  standalone:false
})
export class SelectedUserComponent {
  selectedUser$: Observable<User | null> | undefined;
  totalOrderSum$: Observable<number> | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.selectedUser$ = this.store.select(state => {
      const selectedUserId = state.users.selectedUserId;
      // Check for null and return either the entity or null
      return selectedUserId !== null ? state.users.entities[selectedUserId] : null;
    });

    this.totalOrderSum$ = this.store.select(state => {
      const selectedUserId = state.users.selectedUserId;
      if (selectedUserId !== null) {
        return Object.values(state.orders.entities)
          .filter(order => order.userId === selectedUserId)
          .reduce((sum, order) => sum + order.total, 0);
      }
      return 0;
    });
  }
}
