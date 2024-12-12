import { Injectable } from '@nestjs/common';
import { BaseDataService } from './base-data.service';
import { User } from 'src/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserDataService extends BaseDataService<User>
{
    constructor(
       @InjectRepository(User) 
        private readonly userRepository: Repository<User>) {
        super(userRepository)
    }

}
