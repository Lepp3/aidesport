import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { BookingStatus } from './booking.types';

@Entity('booking')
export class BookingEntity extends BaseEntity {
  @Column({ name: 'session_id', type: 'varchar', unique: true })
  sessionId!: string;

  @Column({ name: 'user_id', type: 'varchar', unique: true })
  userId!: string;

  @Column({
    name: 'booking_status',
    type: 'enum',
    enum: BookingStatus,
    default: BookingStatus.PENDING,
  })
  bookingStatus!: BookingStatus;
}
