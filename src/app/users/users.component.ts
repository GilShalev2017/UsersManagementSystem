import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUsers, selectUser } from '../store/actions';
import { AppState, User } from '../store/app.state';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { selectAllUsers  } from '../store/selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  standalone: false
})

export class UsersComponent implements OnInit {

  users$: Observable<User[]> | undefined;
  usersDataSource = new MatTableDataSource<User>();
  displayedColumns: string[] = ['name'];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
   
    this.users$ = this.store.select(selectAllUsers);
   
    this.store.dispatch(loadUsers());

    this.users$.subscribe((users) => {
      
      this.usersDataSource.data = users;

    });
  }

  onSelectUser(userId: number) {
   
    this.store.dispatch(selectUser({ userId }));
  }
}