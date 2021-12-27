import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";
import {UserModule} from "./user/user.module";
import {RouteModule} from "./route/route.module";
import {RegisterModule} from "./register/register.module";
import {LocationModule} from "./location/location.module";
import {ErrorModule} from "./error/error.module";
import {AlgorithmModule} from "./algorithm/algorithm.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URL || ''),
    UserModule,
    RouteModule,
    RegisterModule,
    LocationModule,
    ErrorModule,
    AlgorithmModule,
  ],
})
export class AppModule {}
