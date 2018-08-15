// import { Injectable } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
// import { DataBaseService } from './data-base.service';
// import { Observable } from 'rxjs/Observable';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   public displayUser: {displayName: string, uid: string};
//   public userAuth;
//   userA: Observable<firebase.User>;

//   constructor(
//     public afAuth: AngularFireAuth,
//     public dataBaseService: DataBaseService
//   ) {
//     this.userA = afAuth.authState;
//   }

  // register(newUser) {
  //    return this.afAuth.auth.createUserWithEmailAndPassword(newUser.email, newUser.password)
  //         .then((user) => {
  //             this.userAuth = firebase.auth().currentUser;
  //             this.userAuth.updateProfile({ displayName: newUser.username, photoURL: '' });
  //             this.displayUser = {displayName: newUser.username, uid: this.userAuth.uid};
  //             localStorage.setItem('displayUser', JSON.stringify({displayName: newUser.username, uid: user.uid, email: newUser.email}));

  //             console.log(this.userAuth);
  //             return firebase.database().ref('users/').child(user.uid).set(newUser);
  //         })
  //         .catch(err => {
  //           throw err;
  //         });
  // }  
// 
// }
