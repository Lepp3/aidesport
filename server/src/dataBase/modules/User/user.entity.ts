import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('user')
export class UserEntity extends BaseEntity {
  @Column({ name: 'first_name', type: 'varchar', length: 100 })
  firstName!: string;

  @Column({ name: 'last_name', type: 'varchar', length: 100 })
  lastName!: string;

  @Column({ name: 'phone_number', type: 'varchar', length: 30, unique: true })
  phoneNumber!: string;

  @Column({ name: 'username', type: 'varchar', unique: true })
  username!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ name: 'company_id', type: 'uuid', nullable: true })
  companyId?: string;
}
