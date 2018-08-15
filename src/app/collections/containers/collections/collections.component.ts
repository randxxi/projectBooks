import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { CollectionsService } from '../../services/collections.service';
import { Collection } from '../../models/collection';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  collectionList: Collection[];
  isEnabledCollectionCard: boolean

  constructor(private collectionService: CollectionsService, private authFire: AngularFireAuth, private rdb: AngularFireDatabase) {
    this.collectionList = null;
    this.isEnabledCollectionCard = false;
  }

  ngOnInit() {
    this.authFire.authState
      .subscribe(
        user => {
          this.rdb.list('collections/' + user.uid).snapshotChanges()
          .subscribe(item => {
            this.collectionList = [];
            item.forEach(element => {
              let x = element.payload.toJSON();
              x["$key"] = element.key;
              this.collectionList.push(x as Collection);
            });
          });
        }
      )
  }

  showCollectionCard() {
    this.isEnabledCollectionCard = !this.isEnabledCollectionCard;
  }

  enterCollection(collection: any){
    console.log(collection);
  }

  removeCollection($key: string) {
    this.collectionService.removeCollection($key);
  }
}
