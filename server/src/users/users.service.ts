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

  findAll() {
    return this.UserModel.find().select('-password');
  }

  findOne(id: string) {
    try {
      return this.UserModel.findById(id).select('-password');
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  update(id: string, data: UpdateUserDto) {
    return this.UserModel.findByIdAndUpdate(
      { _id: id },
      { $set: data },
      { new: true },
    ).select('-password');
  }

  remove(id: string) {
    return this.UserModel.deleteOne({ _id: id }).exec();
  }
}
