import { IUser } from '@code_cyclopedia/domain/contracts/entities/user';
import {
  ICreateUser,
  ICreateUserInput,
} from '@code_cyclopedia/domain/contracts/use-cases/user/create-user';
import { User } from '@code_cyclopedia/domain/models/entities/user';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateUser implements ICreateUser {
  async execute(input: ICreateUserInput): Promise<IUser> {
    const user: User = new User({
      username: input.username,
      email: input.email,
      img: input.img,
      password: input.password,
    });
    return user;
  }
}
