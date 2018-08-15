import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { MessagesService } from '../../alerts/services/messages.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  url = environment.apiBooks;
  collectionsRef: AngularFireList<any>;
  user: firebase.User;

  constructor(private alertService: MessagesService, private authFire: AngularFireAuth,
    rdb: AngularFireDatabase) {
      authFire.authState
      .subscribe(
        user => {
          this.user = user;

          this.collectionsRef = rdb.list('collections/' + this.user.uid);
        }
      );
  }

  addCollection(collection: any) {
    console.log(this.user.uid+" <<<<<<<<<<<<----------------");
    this.collectionsRef.push(collection).then(_ => this.alertService.message("Agregado a Colecciones", "success"));
  }

  removeCollection($key: string) {
    this.collectionsRef.remove($key)
  }
}
