import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Post } from './models/entities/post.entity';
import { CreatePostDto } from './models/dto/create-post.dto';

@Injectable()
export class FeedService {

    constructor(@InjectRepository(Post) private readonly postRepository: Repository<Post>) { }

    async getAllPosts(): Promise<Post[]> {
        return await this.postRepository.find();
    }

    async createPost(createPostDto:CreatePostDto): Promise<Post> {
        const newPost = await this.postRepository.create(createPostDto);
        return await this.postRepository.save(newPost);
    }

    updatePost(id: number, createPostDto:CreatePostDto) {
        return this.postRepository.update(id, createPostDto);
    }

    deletePost(id: number) {
        return this.postRepository.delete(id);
    }
}
