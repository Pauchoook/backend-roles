import {forwardRef, Module} from '@nestjs/common';
import {UsersController} from "../users/users.controller";
import {UsersService} from "../users/users.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {Post} from "./posts.model";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";
import {FilesModule} from "../files/files.module";
import {PostsService} from "./posts.service";
import {PostsController} from "./posts.controller";

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [
    SequelizeModule.forFeature([User, Post]),
    RolesModule,
    forwardRef(() => AuthModule),
    FilesModule
  ]
})
export class PostsModule {}
