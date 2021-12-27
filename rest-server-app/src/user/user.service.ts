import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor() {
  }

  loginUser(): string {
    return 'Hello World!';
  }
}
