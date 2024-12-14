import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Request  } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';
import { SignInDto } from '../dtos/user.dto';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { Public } from '../decorators/decorators.index';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('login')
    signIn(@Body() signInDto: SignInDto) {
        return this.authService.signIn(signInDto.email, signInDto.password);
    }



    @UseGuards(JwtAuthGuard)
    @Post('logout')
    async logout(@Request() req) {
        return 'logged out'
        return req.logout();
      }

}
