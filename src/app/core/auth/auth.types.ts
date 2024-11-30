
import {User} from '../user/user.types'

export interface LoginResponse {
    token: string;
    token_type: String;
    expires_in: string;
    user : User;
    role: string;
}