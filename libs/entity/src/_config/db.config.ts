import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export const typeORMConfig: TypeOrmModuleOptions = {
  type: process.env.RDS_TYPE as any,
  host: process.env.RDS_HOSTNAME,
  port: parseInt(process.env.RDS_PORT),
  username: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DB_NAME,
  autoLoadEntities: true,
  synchronize: (process.env.DB_SYNC === 'true'),
  namingStrategy: new SnakeNamingStrategy(),
};
