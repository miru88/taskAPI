import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { TaskModule } from './task.module';
import { UserModule } from './user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TaskController } from 'src/controllers/task.controller';
import { TaskDataService } from 'src/services/task-data.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Task, User } from 'src/entities/index';
import { UserController } from 'src/controllers/user.controller';
import { AuthController } from '../controllers/auth.controller';
import { AuthModule } from './auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Allow global access to .env variables
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get('DB_PORT', '5432'), 10),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [Task, User],
        synchronize: true, // Disable in production
      }),
    }),
    TaskModule, // Register TaskModule
    UserModule,
    AuthModule ],
  controllers: [AppController, TaskController, UserController, AuthController],
  providers: [AppService],
})
export class AppModule {}
