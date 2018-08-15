import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { routes } from "./routes.auth";
import { LoginComponent } from './containers/login/';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { EmailComponent } from './components/email/email.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  declarations: [LoginComponent, LoginFormComponent, EmailComponent, SignupComponent]
})
export class AuthModule { }
