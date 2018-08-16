import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Auth, IAuth } from "../../models";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<IAuth>();
  @Output() signByGoogle = new EventEmitter<boolean>();
  @Output() signByFacebook = new EventEmitter<boolean>();

  login : IAuth;


  constructor() {
    this.login = new Auth();
   }

  ngOnInit() {
  }

  submit() {    
    this.submitted.emit(this.login);
  }

  signGoogle() {
    this.signByGoogle.emit(true);
  }

  signFacebook() {
    this.signByFacebook.emit(true);
  }

}
