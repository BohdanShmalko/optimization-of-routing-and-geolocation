import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, Schema as MongooseSchema} from 'mongoose';
import {ECollections} from "../collections.enum";

export type UsersDocument = Users & Document;

@Schema({collection: ECollections.Users, timestamps: true})
export class Users {
    @Prop({required: true, index: true})
    phoneNumber: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
