import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { UserAuthService } from '../services/auth/user-auth.service';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [UserAuthService]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'sign-up',
        component: SignupComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'home',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [

    ],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
