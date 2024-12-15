import { Injectable } from '@nestjs/common';
import { Role } from '../entities/role.entity';
import { BaseDataService } from './base-data.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService extends BaseDataService<Role>{
    constructor(
        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>
    )
    {
        super(roleRepository);
    }    
}
