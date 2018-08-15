import { Component, OnInit } from '@angular/core';
import { ICollection, Collection } from '../../models/collection';
import { CollectionsService } from '../../services/collections.service';

@Component({
  selector: 'app-card-collection',
  templateUrl: './card-collection.component.html',
  styleUrls: ['./card-collection.component.css']
})
export class CardCollectionComponent implements OnInit {

  collection: ICollection

  constructor(private collectionService: CollectionsService) { }

  ngOnInit() {
    this.collection = new Collection;
  }

  addCollection(){
    this.collectionService.addCollection(this.collection);
    this.collection = new Collection;
  }
}
