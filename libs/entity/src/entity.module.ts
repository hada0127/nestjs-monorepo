import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityService } from './entity.service';
import { typeORMConfig } from './_config/db.config';

@Module({
  providers: [EntityService],
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  })],
  exports: [TypeOrmModule.forRoot(typeORMConfig), EntityService],
})
export class EntityModule {}
