import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('user') // Table name in PostgreSQL
  export class User {
    @PrimaryGeneratedColumn() // Auto-incrementing primary key
    id: number;

    @Column()// will either be internal, external, or guest 
    accountType: string;
  
    @Column({ unique: true }) // Ensures email is unique
    email: string;
  
    @Column() // Password will be hashed before saving, thats for later
    password: string;
  
    @CreateDateColumn({ type: 'timestamp with time zone' }) // Automatically sets timestamp on creation
    createdDate: Date;
  
    @UpdateDateColumn({ type: 'timestamp with time zone' }) // Automatically updates timestamp on save
    updatedDate: Date;
  }
  