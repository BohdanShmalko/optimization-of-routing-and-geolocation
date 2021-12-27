import { Module } from '@nestjs/common';
import {UsersModule} from "./users/users.module";
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigModule} from "@nestjs/config";
import {LocationsModule} from "./locations/locations.module";
import {ErrorsModule} from "./errors/errors.module";
import {UserLocationsModule} from "./user-locations/user-locations.module";
import {LocationStepsModule} from "./location-steps/location-steps.module";
import {DevicesModule} from "./devices/devices.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URL || ''),
    UsersModule,
    LocationsModule,
    LocationStepsModule,
    ErrorsModule,
    UserLocationsModule,
    DevicesModule,
  ],
})
export class AppModule {}
