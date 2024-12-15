import { Injectable } from '@nestjs/common';
import { UserDataService } from './user-data.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../entities/user.entity';
import { EntityNotFoundError } from 'typeorm';
import { UserRole } from 'src/entities/user-role.entity';

@Injectable()
export class AuthService {
    constructor(private readonly userDataService: UserDataService,
                private readonly jwtService: JwtService,
    ){}

    async signIn(email: string, password: string): Promise<{access_token: string}> {

        let user: Partial<User> = await this.userDataService.findOne({email: email} as User);
        const userDataWithRoles = await this.userDataService.getUserDataWithRoles(user.id);//rethink this, just get roles from service, but this works


        if(user?.password !== password) {
            throw new Error('lol u messed up');
        }

        

        //use this to make the token
        const payload = {sub: user.id, email: user.email, roles: userDataWithRoles.roles};

        console.log(payload);
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }


    async validateUser(email: string, password: string) {

        const user = await this.userDataService.findOne({email: email});
        if (user && user.password === password) {
          const { password, ...result } = user;
          return result;
        }
        return null;
    }
}
