import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  birthdate: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  profile_photo: string;
}
