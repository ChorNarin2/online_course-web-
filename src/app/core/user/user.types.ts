export interface Role {
    name: string;
    description: string;
    permissions: string[];
    
}

export interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role_id: number;
    role: Role;

}
