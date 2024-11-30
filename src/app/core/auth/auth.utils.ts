import { User } from "../user/user.types";
import {UserService} from '../user/user.service';

import { jwtDecode } from "jwt-decode";



interface TokenPayload {
    exp: number;
    iat: number;
    user: User;
}

export class AuthUtils {

    /**
     * Is token expired?
     *
     * @param token
     */

    static isTokenExpired(token: string): boolean {
        // return if there is no token
        if (!token || token === '') {
            return true
        }

         // get the expiration token
        const exp = this._getTokenExpirationDate(token);

        if(exp == null){
                return true
           }

        const expirationTime = exp * 1000;

        if(expirationTime < Date.now()){
            console.log('token expired');
            return true;
        }else{
            return false;
        }

    }

    private static _getTokenExpirationDate(token: string): number | null {
        const _userservice = new  UserService();

        //get the decoded token
        const decodedToken: TokenPayload = jwtDecode(token);
        // Return if the decodedToken doesn't have an 'epx' field
        if(!decodedToken.hasOwnProperty('exp')){
            return null;
        }

        if(decodedToken.hasOwnProperty('user')){
            _userservice.user = decodedToken.user;
        }
        return decodedToken.exp;
    }

   



}