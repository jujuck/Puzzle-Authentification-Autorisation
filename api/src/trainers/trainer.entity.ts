import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity("trainer")
export class Trainers extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  lastname: string;

  @Column()
  @Field()
  firstname: string;

  @Column()
  @Field()
  age: number;

  @Column()
  @Field()
  city: string;

  @Column()
  @Field()
  sex: string;

  @Column()
  @Field()
  speciality: string;
}
