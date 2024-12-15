import { Injectable } from '@nestjs/common';
import { BaseDataService } from './base-data.service';
import { User, Role, UserRole } from 'src/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as INTERFACE from '../interfaces/user.interface';
import { RoleService } from './role.service';
import { UserRoleService } from './user-role.service';

@Injectable()
export class UserDataService extends BaseDataService<User>
{
    constructor(
        @InjectRepository(User) 
        private readonly userRepository: Repository<User>,
        private readonly roleService: RoleService,
        private readonly userRoleService: UserRoleService
    ) {
        super(userRepository)
    }

    async getUserDataWithRoles(userId: number): Promise<INTERFACE.UserWithRoles | null > {

        const user: User = await this.findOne({id: userId});
        const userRoles: UserRole[] = await this.userRoleService.findAllBy('userId',userId);
        const roleIds: number[] = userRoles.map((userRoles) => userRoles.roleId);
        const roles: Role[] = await this.roleService.findAllBy('id',roleIds);
        const roleNames = roles.map((role) => role.name)

        return {
            user: user,
            roles: roleNames
        }

    }

}
