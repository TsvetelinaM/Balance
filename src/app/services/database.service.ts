import { Injectable } from '@angular/core';
mport { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  items: FirebaseListObservable<any[]>;
  constructor(public db: AngularFireDatabase) { }

  

}
