import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUsers, selectUser } from '../store/user.actions';
import { AppState, User } from '../store/app.state';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  standalone: false
})
export class UsersComponent implements OnInit {

  usersDataSource = new MatTableDataSource<User>();
  displayedColumns: string[] = ['name'];

  //users$: Observable<any> | undefined;
 
  fullState$: Observable<any> | undefined;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.fullState$ = this.store.select(state => state);

    this.store.select(state => state).subscribe(fullState => {
      this.usersDataSource.data = Object.values(fullState.users.entities);
      console.log('Full state:', fullState);
    });
  
    // Log just the users slice
    this.store.select(state => state.users).subscribe(users => {
      if (!users || !users.entities) {
        console.error('Invalid state: Users slice is missing or malformed.', users);
        return;
      }
    
      const usersArray = Object.values(users.entities);
      this.usersDataSource.data = usersArray;
    });
    
  
    // Dispatch the action to load users
    this.store.dispatch(loadUsers());

    // this.store.select(state => state)
    //   .subscribe(fullState => {
    //     console.log('Entire state:', fullState); // Should log the complete state object
    //   });

    // this.users$ = this.store.select(state => state.users.entities);
    // this.users$.subscribe(users => {
    //   console.log('Users in component:', users); // Should log the updated entities
    // });

    // // Dispatch the action to load users
    // console.log('Dispatching loadUsers action');
    // this.store.dispatch(loadUsers());

    // this.store.select(state => state.users.entities)
    //   .subscribe(users => {
    //     console.log('Users in selector:', users); // Should log the entities object
    //   });

    // // Select users from the state and set data for MatTableDataSource
    // this.store.select(state => state.users?.entities)
    //   .subscribe(users => {
    //     console.log('Users in store:', users); //hould show an object with user ids as keys
    //     this.usersDataSource.data = Object.values(users); // Convert object to array for the data table
    //   });
  }

  onSelectUser(userId: number): void {
    // Dispatch action to select a user
    this.store.dispatch(selectUser({ userId }));
  }
}
