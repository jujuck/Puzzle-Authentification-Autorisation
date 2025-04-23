import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, InputType, ObjectType } from "type-graphql";
import { IsEmail, MinLength } from "class-validator";

@ObjectType()
@Entity("user")
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  @IsEmail()
  email: string;

  @Column()
  @Field()
  @MinLength(8)
  hash: string;
}

// Some code here

@ObjectType()
export class LoginOutPut {
  @Field()
  id: number;
  @Field()
  email: string;
  @Field()
  isConnected: boolean;
}
