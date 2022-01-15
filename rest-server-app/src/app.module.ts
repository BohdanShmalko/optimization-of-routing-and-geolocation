import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";
import {UserModule} from "./user/user.module";
import {RouteModule} from "./route/route.module";
import {LocationModule} from "./location/location.module";
import {ErrorModule} from "./error/error.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URL || ''),
    UserModule,
    RouteModule,
    LocationModule,
    ErrorModule,
  ],
})
export class AppModule {}
