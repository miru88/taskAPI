import { Injectable } from '@nestjs/common';
import { UserRole } from '../entities/user-role.entity';
import { BaseDataService } from './base-data.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserRoleService extends BaseDataService<UserRole>{
    constructor(
        @InjectRepository(UserRole)
        private readonly roleRepository: Repository<UserRole>
    )
    {
        super(roleRepository);
    }    

}
