import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({usernameField: 'user'});
  }

  async validate(user: string, password: string) {
    const storedUser = await this.authService.validateUser(user, password);

    if (!storedUser)
      throw new UnauthorizedException('Email e/ou Senha inválidos!');

    return storedUser;
  }
}
