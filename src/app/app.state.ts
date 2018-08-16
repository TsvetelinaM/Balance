import { User } from './models/user.model';


export interface AppState {
    readonly currentData: {
        currentUser: User,
    };
}