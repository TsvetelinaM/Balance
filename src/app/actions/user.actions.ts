import { User, RegUser, LoggedUser } from './../models/user.model';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';


export class RegisterUser implements Action {
    readonly type = RegisterUser.TYPE;
    static TYPE = 'Register User';

    constructor(public payload: RegUser) {

    }
}

export class LoginUser implements Action {
    readonly type = LoginUser.TYPE;
    static TYPE = 'Login User';

    constructor(public payload: User) {

    }
}

export class CurrentUser implements Action {
    readonly type = CurrentUser.TYPE;
    static TYPE = 'Current User';

    constructor(public payload: LoggedUser | null) {
    }
}



export type UserActions = RegisterUser & LoginUser & CurrentUser;