import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
// import { DataBaseService } from './data-base.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { LoggedUser, User } from './../models/user.model'
import { ToastsManager } from 'ng6-toastr/ng2-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public displayUser: LoggedUser;
  public userAuth;
  userA: Observable<firebase.User>;

  constructor(
    public afAuth: AngularFireAuth, public router: Router,
    public toastr: ToastsManager
    // public dataBaseService: DataBaseService
  ) {
    this.userA = afAuth.authState;
  }

  registerUser(newUser) {
     return this.afAuth.auth.createUserWithEmailAndPassword(newUser.email, newUser.pass)
        .then((user) => {
            this.userAuth = firebase.auth().currentUser;
            return this.userAuth.updateProfile({ displayName: newUser.username, photoURL: '' });            
        })
        .then((loggedInUser) => {
          
            this.displayUser = new LoggedUser(this.userAuth.uid, this.userAuth.displayName, this.userAuth.email);
            localStorage.setItem('displayUser', JSON.stringify(this.displayUser));

            //creating new collection for the users in the app;
            // return firebase.database().ref('users/').child(user['uid']).set(newUser);

            this.router.navigateByUrl('home');
            
            return this.displayUser;
        })
        .catch(err => {
          this.toastr.error(err.message);
          throw err;
        });
  }  

  logInUser(user: User) {
  return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.pass)
              .then((loggedUser) => {
                this.userAuth = firebase.auth().currentUser;
                this.displayUser = new LoggedUser(this.userAuth.uid, this.userAuth.displayName, this.userAuth.email);
                localStorage.setItem('displayUser', JSON.stringify(this.displayUser));
                
                this.toastr.success('Login Success!');
                
                this.router.navigateByUrl('home');
                
                return this.displayUser;
              })
              .catch(err => {
                this.toastr.error(err.message);
                throw err;
              });
  }

  checkUser() {
    if (JSON.parse(localStorage.getItem('displayUser'))) {
      this.displayUser = JSON.parse(localStorage.getItem('displayUser'));
      return this.displayUser
    }
    return null;
  }

}
