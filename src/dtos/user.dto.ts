import { IsString, IsNotEmpty, IsOptional, IsEnum, IsNumber } from 'class-validator';

export class CreateUserDto {

@IsString()
email: string;

@IsString()
accountType: string;

@IsString()
password: string;


}

export class SignInDto {

@IsString()
email: string;

@IsString()
password: string;
}
