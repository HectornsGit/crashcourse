import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Comment } from './comment.entity';

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  title: string;

  @Column()
  description: string;
  @OneToMany((type) => Comment, (comment) => comment.topic)
  comments: Comment[];
}
