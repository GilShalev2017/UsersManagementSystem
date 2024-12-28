import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AppEffects } from './store/effects';
import { UserService } from './store/user.service';
import { usersReducer, ordersReducer } from './store/reducers';
import { AppComponent } from './app.component';
import { SelectedUserComponent } from './selected-user/selected-user.component';
import { UsersComponent } from './users/users.component';
import { MatIconModule } from '@angular/material/icon'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SelectedUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    StoreModule.forRoot(
      {
        users: usersReducer,
        orders: ordersReducer,
      },
    ),
    EffectsModule.forRoot([AppEffects]),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25, // Retains last 25 states
    // }),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}

// StoreModule.forRoot({ users: userReducer }), 
// EffectsModule.forRoot([UserEffects]),