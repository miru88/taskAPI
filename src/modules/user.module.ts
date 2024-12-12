import { Global, Module } from '@nestjs/common';
import { User } from 'src/entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDataService } from 'src/services/user-data.service';

@Global()
@Module({
    imports: [TypeOrmModule.forFeature([User])],
  providers: [UserDataService],
  exports: [UserDataService],   
})
export class UserModule {}
