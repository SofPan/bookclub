import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  author!: string;

  @Column({ nullable: true })
  cover_url?: string;

  @Column({ nullable: true })
  synopsis?: string;

  @Column('float', { default: 0 })
  avg_rating_cache!: number;
}
