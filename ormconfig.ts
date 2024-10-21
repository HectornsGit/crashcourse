import { Comment } from 'src/entities/comment.entity';
import { Topic } from 'src/entities/topic.entity';
import { User } from 'src/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'testDB',
  port: 5432,
  // OFC these should be env params.
  username: 'postgres',
  password: 'postgres',
  entities: [User, Topic, Comment],
  synchronize: true, // This is only for dev env. For Production leave it false
};
export default config;
