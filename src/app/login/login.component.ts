import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from './../app.state';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { User, RegUser } from './../models/user.model';
import { RegisterUser, LoginUser }  from './../actions/user.actions';
import { UserService } from './../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  signUpForm: FormGroup;
  displaySignUpForm = false;

  constructor(public userService: UserService, private store: Store<AppState>, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      pass:['', Validators.required]
    });
    this.signUpForm = this.formBuilder.group({
      usernameSignUp: ['', Validators.required],
      emailSignUp: ['', Validators.required],
      passSignUp:['', Validators.required],
      passSignUpRepeat:['', Validators.required]
    });
  }

  get loginEmail() { return this.loginForm.get('email'); }
  get loginPass() { return this.loginForm.get('pass'); }

  get usernameSignUp() { return this.signUpForm.get('usernameSignUp'); }
  get signUpEmail() { return this.signUpForm.get('emailSignUp'); }
  get signUpPass() { return this.signUpForm.get('passSignUp'); }
  get signUpPassRepeat() { return this.signUpForm.get('passSignUpRepeat'); }

  onLogIn() {
      let logUser = new User(this.loginEmail.value, this.loginPass.value);
      this.store.dispatch(new LoginUser(logUser));
  }
  onSignUp() {
    if (this.signUpPass.value === this.signUpPassRepeat.value && this.signUpPass.value !== '') {
      let newUser = new RegUser(this.usernameSignUp.value, this.signUpEmail.value, this.signUpPass.value);
      this.store.dispatch(new RegisterUser(newUser));
    }
  }
  onClose() {
    this.displaySignUpForm = false;
  }
  showPopUp() {
    this.displaySignUpForm = !this.displaySignUpForm;
  }

}
