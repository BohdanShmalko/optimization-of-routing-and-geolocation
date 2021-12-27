import {Controller, Post, UseGuards} from '@nestjs/common';
import {ErrorService} from './error.service';
import {Keys} from "../common/auth/auth.decorator";
import {JwtAuthGuard} from "../common/auth/auth.guard";

@Controller('error')
export class ErrorController {
  constructor(private readonly service: ErrorService) {}

  @Keys()
  @UseGuards(JwtAuthGuard)
  @Post()
  fixError(): string {
    return this.service.fixError();
  }
}
