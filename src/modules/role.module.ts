import { Global, Module } from '@nestjs/common';
import { Role } from '../entities/role.entity';
import { RoleService } from 'src/services/role.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
    imports: [TypeOrmModule.forFeature([Role])],
  providers: [RoleService],  // Register service here
  exports: [RoleService],    // Export for other modules if needed
})
export class RoleModule {}
