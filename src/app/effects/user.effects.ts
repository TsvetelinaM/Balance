import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs'
import { Action } from "@ngrx/store";
import { map, catchError, startWith, switchMap, mergeMap, toArray} from 'rxjs/operators';
import { RegisterUser, LoginUser, CurrentUser } from './../actions/user.actions';
import { ofType } from '@ngrx/effects';
import { User } from '../models/user.model';

@Injectable()
export class UserEffects {
    @Effect()
    loadOrders$: Observable<Action> = this.actions$
    .pipe(  
            ofType('Register User'),       
            switchMap(action =>{
                return this.userService.registerUser(action['payload']);
            } ),
            map((user: any) => {
                return new CurrentUser(user);
            })
    );
    constructor(
        private actions$: Actions,
        private userService: UserService
    ) {}
}