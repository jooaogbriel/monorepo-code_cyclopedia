import { ICreateUser } from '@code_cyclopedia/domain/contracts/use-cases/user/create-user';
import { Module, Provider } from '@nestjs/common';
import { CreateUser } from './create-user.use-case';

export const createUserProvider: Provider = {
  provide: ICreateUser,
  useClass: CreateUser,
};

@Module({
  providers: [createUserProvider],
  imports: [],
  exports: [createUserProvider],
})
export class CreateUserDataModule {}
