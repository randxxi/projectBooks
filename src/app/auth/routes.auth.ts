import { Routes } from "@angular/router";
import { LoginComponent } from "./containers/login/";
import { EmailComponent } from './components/email/email.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [   
    {path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
 ];
