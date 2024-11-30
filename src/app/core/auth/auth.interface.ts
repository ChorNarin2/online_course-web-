

import { User } from '../user/interface';

export interface Role {
    name: string;
}

export interface ResponseLogin {
    success: boolean;
    token : string;
    expires_in: Date;
    user: User;
    roles: Role[];

}