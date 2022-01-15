import {Controller, Post} from '@nestjs/common';
import {UserService} from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post('sendCode')
  sendCode(): string {
    return this.service.sendCode();
  }

  @Post('confirmCode')
  confirmCode(): string {
    return this.service.confirmCode();
  }

  @Post('login')
  loginByToken(): string {
    return this.service.loginUser();
  }
}
