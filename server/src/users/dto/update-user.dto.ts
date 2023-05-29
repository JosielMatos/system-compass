import { PartialType } from "@nestjs/mapped-types";
import { IsEmail, IsNotEmpty } from "class-validator";
import { CreateUserDto } from "./create-user.dto";
import { IsPreviousDate } from "../helpers/is-previous-date.decorator";

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsPreviousDate()
  birthdate: string;

  @IsNotEmpty()
  username: string;
  
  @IsNotEmpty()
  name: string;

  profile_photo?: string;
}
