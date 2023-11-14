import type { MigrationInterface, QueryRunner } from 'typeorm';
import { getDbSyntaxMap } from '@server/utils/DbColumnHelper';

const dbSyntaxMap = getDbSyntaxMap();

export class AddDiscoverSlider1672041273674 implements MigrationInterface {
  name = 'AddDiscoverSlider1672041273674';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "discover_slider" ("id" ${dbSyntaxMap.AUTOINCREMENT} NOT NULL, "type" integer NOT NULL, "order" integer NOT NULL, "isBuiltIn" boolean NOT NULL DEFAULT (0), "enabled" boolean NOT NULL DEFAULT (1), "title" varchar, "data" varchar, "createdAt" ${dbSyntaxMap.DATETIME} NOT NULL DEFAULT ${dbSyntaxMap.DATETIME_CURRENT}, "updatedAt" ${dbSyntaxMap.DATETIME} NOT NULL DEFAULT ${dbSyntaxMap.DATETIME_CURRENT})`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "discover_slider"`);
  }
}
