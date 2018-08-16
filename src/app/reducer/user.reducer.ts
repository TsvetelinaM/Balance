import { CurrentUser } from './../actions/user.actions';
import { User } from './../models/user.model';
import { Action } from "@ngrx/store";
import { UserActions } from '../actions/user.actions';

export function userReducer(state: User, action: UserActions) {
    switch(action.type) {
        case CurrentUser.TYPE:
            return [action.payload];
        default:
            return state;
    }
}