import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('review')
export class ReviewEntity extends BaseEntity {
  @Column({ name: 'author_id', type: 'varchar', unique: true })
  authorId!: string;

  @Column({ name: 'coach_id', type: 'varchar', unique: true })
  coachId!: string;

  @Column({ name: 'rating', type: 'integer' })
  rating!: number;

  @Column({ name: 'comment', type: 'varchar', length: 350 })
  comment!: string;
}
