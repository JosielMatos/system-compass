import { PartialType } from "@nestjs/mapped-types";
import { IsEmail, IsNotEmpty } from "class-validator";
import { CreateUserDto } from "./create-user.dto";

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNotEmpty()
  @IsEmail()
  user: string;

  @IsNotEmpty()
  birthDate: string;

  @IsNotEmpty()
  userName: string;
  
  @IsNotEmpty()
  name: string;

  profile_photo?: string;
}
