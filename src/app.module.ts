import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ProductsModule, UsersModule, AuthModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
