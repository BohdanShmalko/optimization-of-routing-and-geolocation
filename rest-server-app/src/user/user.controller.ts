import {Controller, Post} from '@nestjs/common';
import {UserService} from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post('login')
  loginUser(): string {
    return this.service.loginUser();
  }
}
