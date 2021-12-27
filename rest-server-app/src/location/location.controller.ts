import {Controller, Post, UseGuards} from '@nestjs/common';
import {LocationService} from './location.service';
import {Keys} from "../common/auth/auth.decorator";
import {JwtAuthGuard} from "../common/auth/auth.guard";

@Keys()
@UseGuards(JwtAuthGuard)
@Controller('location')
export class LocationController {
  constructor(private readonly service: LocationService) {}

  @Post()
  fixUserLocation(): string {
    return this.service.fixUserLocation();
  }
}
