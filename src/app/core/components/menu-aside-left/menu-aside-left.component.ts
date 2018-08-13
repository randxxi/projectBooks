import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../auth/services/auth/auth.service";

@Component({
  selector: 'app-menu-aside-left',
  templateUrl: './menu-aside-left.component.html',
  styleUrls: ['./menu-aside-left.component.css']
})
export class MenuAsideLeftComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }

}
