import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  user: string;

  @IsNotEmpty()
  birthDate: string;

  @IsNotEmpty()
  userName: string;
  
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  profile_photo: string;
}
