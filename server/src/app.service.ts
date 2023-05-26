import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hi there! This is the API for the System Compass app';
  }
}
