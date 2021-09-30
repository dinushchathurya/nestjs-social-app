import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from  '@nestjs/typeorm';
import { FeedModule } from './feed/feed.module';
import config from 'ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    ConfigModule.forRoot({ isGlobal:true }),
    FeedModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
