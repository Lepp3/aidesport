import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('company')
export class Company extends BaseEntity {
  @Column({ name: 'name', type: 'varchar', length: 40 })
  name!: string;

  @Column({ name: 'description', type: 'varchar', length: 300 })
  description!: string;

  @Column({ name: 'address', type: 'varchar', length: 50 })
  address!: string;
}
