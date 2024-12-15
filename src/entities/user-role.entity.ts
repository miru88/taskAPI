import {
    Column,
    ManyToOne,
    JoinColumn,
    Entity,
    PrimaryColumn
  } from 'typeorm';
  import { User } from '../entities/user.entity';
  import { Role } from '../entities/role.entity';

@Entity('user_role')
export class UserRole {
    @PrimaryColumn()
    userId: number;
  
    @PrimaryColumn()
    roleId: number;    

    @ManyToOne(() => User, { nullable: false,})
    @JoinColumn({ name: 'userId' })
    user: User;

    @ManyToOne(() => Role, { nullable: false,})
    @JoinColumn({ name: 'roleId' })
    role: Role;

}