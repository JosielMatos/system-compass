import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './entities/post.entity';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name)
    private PostModel: Model<PostDocument>,
  ) {}

  create(data: CreatePostDto) {
    const post = new this.PostModel(data);
    return post.save();
  }

  async findAll() {
    return await this.PostModel.find();
  }

  async findOne(id: string) {
    try {
      return await this.PostModel.findById(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async update(id: string, data: UpdatePostDto) {
    try {
      return await this.PostModel.findByIdAndUpdate(
        { _id: id },
        { $set: data },
        { new: true },
      );
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async remove(id: string) {
    try {
      return await this.PostModel.deleteOne({ _id: id }).exec();
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
