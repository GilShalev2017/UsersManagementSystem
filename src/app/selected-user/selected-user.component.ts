import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, User } from '../store/app.state';
import { selectSelectedUser, selectTotalOrderSum } from '../store/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-selected-user',
  templateUrl: './selected-user.component.html',
  styleUrl: './selected-user.component.scss',
  standalone: false
})
export class SelectedUserComponent implements OnInit {
  
  selectedUser$: Observable<User | null> | undefined; 
  totalOrderSum$: Observable<number> | undefined; 

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    
    this.selectedUser$ = this.store.select(selectSelectedUser);
    
    this.totalOrderSum$ = this.store.select(selectTotalOrderSum);
  }
}
