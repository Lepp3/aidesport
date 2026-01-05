import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { SportEnum } from './coach.types';

@Entity('coach')
export class Coach extends BaseEntity {
  @Column({ name: 'user_id', type: 'varchar', unique: true })
  userId!: string;

  @Column({ name: 'bio', type: 'varchar', length: 300 })
  bio!: string;

  @Column({
    name: 'sport',
    type: 'enum',
    enum: SportEnum,
  })
  sport!: SportEnum;

  @Column({ name: 'years_experience', type: 'int' })
  yearsExperience!: number;
}
