import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Generated,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({
    select: true, //查询时该字段会被过滤
  })
  password: string;

  @Generated()
  uuid: string;

  @CreateDateColumn()
  create_at: Date;
}
