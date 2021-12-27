import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, Schema as MongooseSchema} from 'mongoose';
import {ECollections} from "../collections.enum";
import * as mongoose from "mongoose";
import {EDevices} from "./device.enum";

export type DevicesDocument = Devices & Document;

@Schema({collection: ECollections.Devices, timestamps: true})
export class Devices {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: ECollections.Users, required: true })
    userId: MongooseSchema.Types.ObjectId;

    @Prop({ enum: EDevices, required: true })
    deviceName: string
}

export const DevicesSchema = SchemaFactory.createForClass(Devices);
