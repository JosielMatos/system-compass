import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes, Types } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'User', required: true })
  user_id: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop()
  post_date: Date;

  @Prop({ required: true })
  description: string;

  @Prop({ default: 0 })
  likes: number;

  @Prop()
  url_image?: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
