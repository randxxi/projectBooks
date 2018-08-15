import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { auth } from 'firebase';
import { IAuth } from '../../models';
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";
import { moveIn, fallIn } from '../../router.animations';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {

  error: any;
  login : IAuth;

  constructor(private authService: AuthService, private router: Router, private zone: NgZone) { }

  ngOnInit() {
  }

  onSubmit(formData) {    
    this.authService.login(formData)
    .then(
      auth => {
        localStorage.setItem('bzgBooksApp2', JSON.stringify(auth));
        this.router.navigate(['main']);
      },
      error => {
        alert(error.message);
        this.error = error;
      }
    );
  }

}
