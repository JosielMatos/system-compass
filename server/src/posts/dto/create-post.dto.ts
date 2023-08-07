import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsDate()
  post_date: Date = new Date();

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @IsUrl()
  url_image?: string;

  @IsNumber()
  likes: number = 0;
}
