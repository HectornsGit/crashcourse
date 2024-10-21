import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Topic } from './topic.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  text: string;

  @ManyToOne((type) => User, (user) => user.comments)
  user: User;

  @ManyToOne((type) => Topic, (Topic) => Topic.comments)
  topic: Topic;
}
