import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { TaskModule } from './task.module';
import { UserModule } from './user.module';

@Module({
  imports: [TaskModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
