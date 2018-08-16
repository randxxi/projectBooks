import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ICollection, Collection } from '../../models/collection';

@Component({
  selector: 'app-collection-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.css']
})
export class CollectionFormComponent implements OnInit {
  @Output() submitted = new EventEmitter();
  collection : ICollection;

  constructor() { 
    this.collection = new Collection();
  }

  ngOnInit() {
  }

  submit() {
    if(this.collection.name.trim().length > 0){
      this.submitted.emit(this.collection);
    this.collection.name ="";
    this.collection.description ="";
    }
    

  }

}
