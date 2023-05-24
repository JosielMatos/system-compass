import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('api/v1/posts/:post_id/comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @Get()
  findAll(@Param('post_id') post_id: string) {
    return this.commentsService.findAll(post_id);
  }

  @Get(':id')
  findOne(@Param('post_id') post_id: string, @Param('id') id: string) {
    return this.commentsService.findOne(post_id, id);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.commentsService.remove(id);
  }
}
