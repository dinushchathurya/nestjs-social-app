import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedController } from './feed.controller';
import { FeedService } from './feed.service';
import { Post } from './models/entities/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature(
    [Post]
  )],
  controllers: [FeedController],
  providers: [FeedService]
})
export class FeedModule {}
