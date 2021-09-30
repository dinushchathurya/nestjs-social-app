
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Post extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: ''})
    body: string;

    @Column({ type: 'timestamp', default: ()=> 'CURRENT_TIMESTAMP'})
    createdAt: Date;
}