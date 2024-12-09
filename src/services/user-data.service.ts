import { Injectable } from '@nestjs/common';
import { BaseDataService } from './base-data.service';
import { User } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class UserDataService extends BaseDataService<User>{
    constructor(private readonly userRepository: Repository<User>) {
        super(userRepository)
    }

    //create
    //findby
    //update
    //delete
}
