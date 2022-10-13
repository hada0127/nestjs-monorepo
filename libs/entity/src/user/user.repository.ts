import { Injectable } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { DataSource, Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  async findUserName(userId: number): Promise<UserName> {
    const queryBuilder = this.createQueryBuilder().select(["user.firstName", "user.lastName"]).from(User, "user").where(`user.id =:id`, { id: userId });

    const row = await queryBuilder.getOne();
    return plainToClass(UserName, row);
  }
}

export class UserName {
  firstName: string;
  lastName: string;

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
