import { CurrentUser } from './../actions/user.actions';
import { RegUser, User } from './../models/user.model';
import { Action } from "@ngrx/store";
import { UserActions } from '../actions/user.actions';

export function userReducer(state: RegUser, action: UserActions) {
    switch(action.type) {
        case CurrentUser.TYPE:
            return [action.payload];
        default:
            return state;
    }
}