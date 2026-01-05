import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { SessionStatus } from './session.types';

@Entity('session')
export class SessionEntity extends BaseEntity {
  @Column({ name: 'coach_id', type: 'varchar', unique: true })
  coachId!: string;

  @Column({ name: 'start_time', type: 'timestamp' })
  startTime!: string;

  @Column({ name: 'end_time', type: 'timestamp' })
  endTime!: string;

  @Column({
    name: 'status',
    type: 'enum',
    enum: SessionStatus,
    default: SessionStatus.AVAILABLE,
  })
  status!: SessionStatus;
}
