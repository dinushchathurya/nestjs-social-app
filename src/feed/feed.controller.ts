import { Controller, Body, Post, Get, Patch, Param, Delete } from '@nestjs/common';
import { FeedService } from './feed.service';
import { CreatePostDto } from './models/dto/create-post.dto';

@Controller('feed')
export class FeedController {

    constructor(private readonly feedService:FeedService) { }

    @Get()
    getAllPosts() {
        return this.feedService.getAllPosts();
    }

    @Post()
    createPost(@Body() createPostDto:CreatePostDto) {
        return this.feedService.createPost(createPostDto);
    }

    @Patch('/:id')
    updatePost(@Param() id: number, @Body() createPostDto: CreatePostDto) {
        return this.feedService.updatePost(id,createPostDto);
    }

    @Delete(':/id')
    deletePost(@Param() id: number) {
        return this.feedService.deletePost(id);
    }
}
