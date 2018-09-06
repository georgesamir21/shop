import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ],
  declarations: [
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ProfileComponent
  ]
})
export class UsersModule { }
