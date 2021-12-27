import {Module} from '@nestjs/common';
import {RouteController} from './route.controller';
import {RouteService} from './route.service';

@Module({
    imports: [],
    controllers: [RouteController],
    providers: [RouteService],
})
export class RouteModule {
}
