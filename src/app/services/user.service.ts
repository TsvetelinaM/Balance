import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { DataBaseService } from './data-base.service';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public displayUser: {displayName: string, uid: string};
  public userAuth;
  userA: Observable<firebase.User>;

  constructor(
    public afAuth: AngularFireAuth,
    public dataBaseService: DataBaseService,
    public toastr: ToastsManager
  ) {
    this.userA = afAuth.authState;
  }

}
