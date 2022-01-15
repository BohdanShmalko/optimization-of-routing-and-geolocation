import {Controller, Get, Put, UseGuards} from '@nestjs/common';
import {RouteService} from './route.service';
import {JwtAuthGuard} from "../common/auth/auth.guard";
import {Keys} from "../common/auth/auth.decorator";

@Keys()
@UseGuards(JwtAuthGuard)
@Controller('route')
export class RouteController {
    constructor(private readonly service: RouteService) {
    }

    // @Get('user')
    // routeToUser(){
    //     return this.service.routeToUser();
    // }

    @Get('place')
    routeToPlace(){
        return this.service.routeToPlace();
    }

    @Put()
    changeUserAlgorithm(): string {
        return this.service.changeUserAlgorithm();
    }
}
