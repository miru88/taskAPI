import { Global, Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from '../services/auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import { JwtStrategy } from './jwt.strategy';

@Global()
@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.registerAsync({
            global: true,
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) =>({
                secret: configService.get('JWT_SECRET') || 'secret sauce',
                signOptions: {expiresIn: configService.get('JWT_EXPIRES_IN')}
            }),
            inject: [ConfigService]
        })],
    providers: [AuthService],
    exports: [AuthService]

})
export class AuthModule {}
