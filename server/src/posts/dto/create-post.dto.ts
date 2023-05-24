import { IsDate, IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

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

  @IsNotEmpty()
  @IsUrl()
  url_image: string = "https://source.unsplash.com/random";

  @IsNumber()
  likes: number = 0;
}
