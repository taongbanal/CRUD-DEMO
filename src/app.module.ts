import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123132321',
      database: 'postgres',
      entities: ['dist/**/*.entity.js'],
      synchronize: true, 
  }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
