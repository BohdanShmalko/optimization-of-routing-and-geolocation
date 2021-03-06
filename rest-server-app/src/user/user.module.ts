import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {AuthModule} from "../common/auth/auth.module";
import {UsersModule} from "@db/index"

@Module({
  imports: [
      AuthModule,
      UsersModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
