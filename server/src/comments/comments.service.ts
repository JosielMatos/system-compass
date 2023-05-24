import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment, CommentDocument } from './entities/comment.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name)
    private CommentModel: Model<CommentDocument>,
  ) {}

  create(data: CreateCommentDto) {
    const post = new this.CommentModel(data);
    return post.save();
  }

  async findAll(post_id: string) {
    try {
      return await this.CommentModel.find({ post_id });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async findOne(post_id: string, id: string) {
    try {
      return await this.CommentModel.findOne({ post_id, _id: id });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async remove(id: string) {
    try {
      return await this.CommentModel.deleteOne({ _id: id }).exec();
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
