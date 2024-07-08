import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";

interface PostCreationAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({tableName: "posts"})
export class Post extends Model<Post, PostCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: "user@mail.ru", description: "Email"})
  @Column({type: DataType.STRING, allowNull: false})
  title: string;

  @Column({type: DataType.STRING, allowNull: false})
  content: string

  @Column({type: DataType.STRING})
  image: string

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId:number

  @BelongsTo(() => User)
  author: User
}