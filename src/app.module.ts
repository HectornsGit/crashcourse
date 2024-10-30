import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { CommentModule } from './comment/comment.module';
import { CommentService } from './comment/comment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { User } from './entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule,
    CommentModule,
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([User]),
    AuthModule,
  ],
  controllers: [AppController, UserController, AuthController],
  providers: [AppService, UserService, CommentService, AuthService, JwtService],
})
export class AppModule {}
