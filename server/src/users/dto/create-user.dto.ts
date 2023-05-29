import { IsEmail, IsNotEmpty } from 'class-validator';
import { IsPreviousDate } from '../helpers/is-previous-date.decorator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsPreviousDate()
  birthdate: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  profile_photo: string;
}
