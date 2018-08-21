import { CurrentUser } from './../actions/user.actions';
import { User, RegUser } from './../models/user.model';
import { AppState } from './../app.state';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: Observable<any>;
  currentUserName: string;
  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.currentUser = this.store.select('currentUser');
    this.currentUser.subscribe((user) => {
      this.currentUserName = user[0].username} );
  }

  logOut() {

  }

}
