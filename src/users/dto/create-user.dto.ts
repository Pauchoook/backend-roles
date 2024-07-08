import {ApiProperty} from "@nestjs/swagger";
import {IsString, IsEmail, Length} from "class-validator";

export class CreateUserDto {
  @ApiProperty({example: "user@mail.ru", description: "Email"})
  @IsString({message: 'Должно быть строкой'})
  @IsEmail({}, {message: 'Неккоректный email'})
  readonly email: string;

  @ApiProperty({example: "123", description: "Password"})
  @IsString({message: 'Должно быть строкой'})
  @Length(4, 16, {message: 'Не меньеш 4 и не больше 16 символов'})
  readonly password: string;
}