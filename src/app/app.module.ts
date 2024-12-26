import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UserEffects } from './store/user.effects';
import { UserService } from './services/user.service';
import { userReducer } from './store/user.reducer';
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
    StoreModule.forRoot({ users: userReducer }), 
    EffectsModule.forRoot([UserEffects]),
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
