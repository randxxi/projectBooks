import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BooksListService } from '../../../books/services/list/books-list.service';
import { CollectionService } from '../../../collections/services/collections.service';
import { Collection, ICollection } from '../../../collections/models/collection';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.styl']
})
export class BookInfoComponent implements OnInit {

  listCollections: Observable<any[]>;
  collectionSelected:ICollection;

  @Input() book: any;
  @Output() pushFavorite = new EventEmitter<any>();
  

  constructor(private collectionService:CollectionService,private _bookService: BooksListService, private authFire: AngularFireAuth) {
    this.listCollections = null;
    this.collectionSelected = null;
  }

  ngOnInit() {
    this.authFire.authState
    .subscribe(
      user => {          
        this.listCollections =  this.collectionService.getListCollections().snapshotChanges().pipe(
          map(changes => 
            changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
          ));
      }
    ); 
  }

  addFavorite() {
    this.pushFavorite.emit(this.book);
  }

   addToCollection(event:any){
    this.collectionService.addBook(event.target.value,this.book);
  }
  
}
