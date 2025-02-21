import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../auth/user.entity';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  time: string;

  @Column({ default: 'in-progress' })
  status: string;

  @ManyToOne(() => User, (user) => user.todos)
  user: User;
}