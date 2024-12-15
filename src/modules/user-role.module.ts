import { Global, Module } from '@nestjs/common';
import { UserRole } from 'src/entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRoleService } from 'src/services/user-role.service';

@Global()
@Module({
    imports: [TypeOrmModule.forFeature([UserRole])],
  providers: [UserRoleService],  // Register service here
  exports: [UserRoleService],    // Export for other modules if needed
})
export class UserRoleModule {}