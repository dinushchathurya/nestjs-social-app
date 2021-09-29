
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: ''})
    body: string;

    @Column({ type: 'timestamp', default: ()=> 'CURRENT_TIMESTAMP'})
    createdAt: Date;
}