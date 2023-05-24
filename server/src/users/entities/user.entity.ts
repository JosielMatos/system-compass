import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { Post } from 'src/posts/entities/post.entity';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  userName: string;

  @Prop({ required: true })
  user: string;

  @Prop({ required: true })
  birthDate: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: 'http://superexample.com' })
  profile_photo: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Post' })
  posts: Post[];
}

export const UserSchema = SchemaFactory.createForClass(User);
