import { User, Role } from '../entities';

export interface UserWithRoles {
    user: User;
    roles: string[];
}