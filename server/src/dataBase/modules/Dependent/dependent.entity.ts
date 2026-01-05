import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('dependent')
export class DependentEntity extends BaseEntity {
  @Column({ name: 'dependent_name', type: 'varchar', length: 30 })
  dependentName!: string;

  @Column({ name: 'parent_id', type: 'varchar', unique: true })
  parentId!: string;

  @Column({ name: 'birth_date', type: 'date' })
  birthDate!: Date;
}
