import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { BooksListService } from '../../../books/services/list/books-list.service';
import { Store, select } from "@ngrx/store";
import * as fromRoot from "../../../reducer/reducer";
import * as layout from "../../actions/layout";
import { Observable } from 'rxjs';
import { User } from "firebase/app";

@Component({
  selector: 'app-top-nav-app',
  templateUrl: './top-nav-app.component.html',
  styleUrls: ['./top-nav-app.component.css']
})
export class TopNavAppComponent implements OnInit {
  @Input() user: User;
  stateAside$: Observable<string> = this.store.pipe(select(fromRoot.getShowSideNav));
  state: string = 'open';

  constructor(private _bookService: BooksListService, private store: Store<fromRoot.State>) {

  }

  ngOnInit() {
  }

  closeAside() {
    if (this.state === 'close') {
      this.state = 'open'; this.store.dispatch(new layout.OpenSideNav());
    } else {
      this.state = 'close'; this.store.dispatch(new layout.CloseSideNav());
    }
  }

  searchText(event: string) {
    if (event.length > 0) {
      this._bookService.searchBooks(event, 0, 20);
    }
  }

}
