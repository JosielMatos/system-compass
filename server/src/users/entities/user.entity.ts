import { IsEmail } from 'class-validator';
import { Column, ObjectIdColumn } from 'typeorm';

export class User {
  @ObjectIdColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  user_name: string;

  @Column()
  @IsEmail()
  user: string;

  @Column()
  password: string;

  @Column({ default: 'http://example.com' })
  profile_photo: string;
}
