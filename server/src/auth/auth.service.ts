import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    let user: User;

    try {
      user = await this.usersService.findMatch(email);
      if (!user) throw new NotFoundException();
    } catch (error) {
      return null;
    }

    const isPasswordValid = compareSync(password, user.password);

    if (!isPasswordValid) return null;

    return user;
  }

  async login(user) {
    const payload = {
      _id: user._id,
      email: user.email,
      name: user.name,
      profile_photo: user.profile_photo,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
