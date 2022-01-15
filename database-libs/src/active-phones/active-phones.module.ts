import {Module} from '@nestjs/common';
import {ActivePhones, ActivePhonesSchema} from "./active-phones.schema";
import {MongooseModule} from '@nestjs/mongoose';
import {ActivePhonesService} from "./active-phones.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: ActivePhones.name, schema: ActivePhonesSchema},
        ]),
    ],
    exports: [ActivePhonesService],
    providers: [ActivePhonesService],
})
export class ActivePhonesModule {
}
