import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Rooms, RoomsDocument} from "./rooms.schema";

@Injectable()
export class RoomsService {
    constructor(
        @InjectModel(Rooms.name)
        protected model: Model<RoomsDocument>,
    ) {
    }
}
