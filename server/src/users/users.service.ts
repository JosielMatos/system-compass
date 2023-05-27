import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private UserModel: Model<UserDocument>,
  ) {}

  create(data: CreateUserDto) {
    const user = new this.UserModel(data);
    return user.save();
  }

  async findAll() {
    return await this.UserModel.find();
  }

  async findOne(id: string) {
    try {
      return await this.UserModel.findById(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async findMatch(email: string) {
    return await this.UserModel.findOne({ email });
  }

  async update(id: string, data: UpdateUserDto) {
    try {
      return await this.UserModel.findByIdAndUpdate(
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
      return await this.UserModel.deleteOne({ _id: id }).exec();
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
