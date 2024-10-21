import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { CommentModule } from './comment/comment.module';
import { CommentService } from './comment/comment.service';

@Module({
  imports: [UserModule, CommentModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, CommentService],
})
export class AppModule {}
