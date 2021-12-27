import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, Schema as MongooseSchema} from 'mongoose';
import {ECollections} from "../collections.enum";
import {ELocations} from "./locations.enum";

export type LocationsDocument = Location & Document;

@Schema({collection: ECollections.Locations, timestamps: true})
export class Locations {
    @Prop({ required: true })
    startLat: string;

    @Prop({ required: true })
    startLon: string;

    @Prop({ required: true })
    endLat: string;

    @Prop({ required: true })
    endLon: string;

    @Prop({ required: true, enum: ELocations })
    algorithm: string
}

export const LocationsSchema = SchemaFactory.createForClass(Locations);
