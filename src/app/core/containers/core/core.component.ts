import { Component, OnInit } from '@angular/core';
import { MessagesService } from "../../../alerts/services/messages.service";
import { Store, select } from "@ngrx/store";
import * as fromRoot from "../../../reducer/reducer";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.styl']
})
export class CoreComponent implements OnInit {

  stateAside$:Observable<string> = this.store.pipe(select(fromRoot.getShowSideNav));

  constructor(private alertService:MessagesService, private store: Store<fromRoot.State>) { }

  ngOnInit() {

    window.addEventListener('online',  this.updateIndicator.bind(this));
  	window.addEventListener('offline', this.updateIndicator.bind(this));
  }

  updateIndicator (event) {
  	if(event.type == "online") {  		
      let msg = "Se ha establecido conexión de red.";
      let type = "success";      
  		this.alertService.message(msg,type);

  	}else if(event.type == "offline"){  		
      let msg = "Se ha perdido la conexión de red.";      
      let type = "error"; 
  		this.alertService.message(msg, type);
  	}
  }
}
