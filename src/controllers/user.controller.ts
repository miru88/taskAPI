import { Controller, Get, Post, Patch, Delete, Body, Param} from '@nestjs/common';
import { UserDataService } from 'src/services/user-data.service';
import { CreateUserDto } from '../dtos/user.dto';
import { User } from '../entities/user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userDataService: UserDataService) {}

    //create
    @Post('/create')
    createUser(@Body() data: CreateUserDto) {
        return this.userDataService.create(data);
    }

    
    //findby
    @Get('/find/:userId')
    getOneById(@Param('userId') id: number) {
       return this.userDataService.findOne({id} as User); 
    }
    //update
    //delete



}
