import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {UserRoles} from "./user-roles.model";

interface RoleCreationAttrs {
  value: string;
  description: string;
}

@Table({tableName: "roles"})
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({example: "1", description: "Unique"})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: "ADMIN", description: "Meaning role"})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  value: string;

  @ApiProperty({example: "ADMIN", description: "Must do"})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[]
}