import {
    PrimaryGeneratedColumn,
    Column,
    Entity
  } from 'typeorm';

  @Entity('role')
  export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
  }