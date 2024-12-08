import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    JoinColumn
  } from 'typeorm';
  import { User } from './user.entity';
  
  export enum TaskStatus {
    PENDING = 'Pending',
    IN_PROGRESS = 'In Progress',
    COMPLETED = 'Completed',
  }
  
  @Entity('task')
  export class Task {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 255, nullable: false })
    title: string;
  
    @Column({ type: 'text', nullable: true })
    description: string;
  
    @Column({
      type: 'enum',
      enum: TaskStatus,
      default: TaskStatus.PENDING,
    })
    status: TaskStatus;
  
    @Column({ type: 'timestamp', nullable: true })
    dueDate: Date;
  
    @ManyToOne(() => User, { nullable: false,})
    @JoinColumn({ name: 'userId' })
    user: User;
    
    @Column()
    userId: number; //usually this isnt explicit like this
  
    @CreateDateColumn({ type: 'timestamp' })
    createdDate: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updatedDate: Date;
  
    @DeleteDateColumn({ type: 'timestamp' })
    deletedDate: Date;
  }
  