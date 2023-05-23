import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(data: CreateUserDto) {
    const user = this.usersRepository.create(data);
    return await this.usersRepository.save(user);
  }

  async findAll() {
    return await this.usersRepository.find({
      select: ['id', 'user', 'name', 'user_name', 'profile_photo'],
    });
  }

  async findOne(id: string) {
    try {
      return this.usersRepository.findOne({ where: { id } });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: string, data: UpdateUserDto) {
    const user = await this.findOne(id);
    this.usersRepository.merge(user, data);
    return await this.usersRepository.save(user);
  }

  async remove(id: string) {
    await this.usersRepository.findOneByOrFail({ id });

    this.usersRepository.delete(id);
  }
}
