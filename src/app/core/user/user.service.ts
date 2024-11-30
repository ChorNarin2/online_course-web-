import { Observable, ReplaySubject }    from 'rxjs';
import {User} from './user.types'


export class UserService {

    private _user: ReplaySubject<User> = new ReplaySubject<User>(1);
    private _roles: ReplaySubject<string> = new ReplaySubject<string>(1);

    // setter for updating new users
    set user(user: User) {
        this._user.next(user);
    }


    // setter for updating new roles
    set roles(roles: string){
        this._roles.next(roles);
    }

    // getter for accessing the user data as an  observable user
    get user$(): Observable<User> {
        return this._user.asObservable();
    }

    // getter for accessing the roles data as an  observable roles
    get roles$(): Observable<string> {
        return this._roles.asObservable();
    }


}