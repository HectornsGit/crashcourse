import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local-strategy';
import { User } from 'src/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  providers: [AuthService, UserService, JwtService, LocalStrategy, UserService],
  controllers: [AuthController],
  imports: [
    JwtModule.register({
      secret: process.env.jwt_secret,
      signOptions: { expiresIn: '3600s' },
    }),
    TypeOrmModule.forFeature([User]),
  ],
})
export class AuthModule {}
