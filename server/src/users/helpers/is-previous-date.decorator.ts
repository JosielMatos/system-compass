import { BadRequestException } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';
import * as dayjs from 'dayjs';

export function IsPreviousDate(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isPreviousDate',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const arr = value.split('/');
          const year = arr.pop();
          arr.reverse();
          const formattedDate = arr.join('/') + `/${year}`;

          const currentDate = dayjs();
          const providedDate = dayjs(formattedDate, 'DD/MM/YYYY', true);

          if (!providedDate.isValid()) {
            throw new BadRequestException('Invalid date');
          }

          if (!providedDate.isBefore(currentDate, 'day')) {
            throw new BadRequestException('Date must be a previous date');
          }

          return true;
        },
      },
    });
  };
}
