import type { MigrationInterface, QueryRunner } from 'typeorm';
import { getDbSyntaxMap } from '@server/utils/DbColumnHelper';

const dbSyntaxMap = getDbSyntaxMap();

export class SeasonStatus1605085519544 implements MigrationInterface {
  name = 'SeasonStatus1605085519544';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "season" ("id" ${dbSyntaxMap.AUTOINCREMENT} NOT NULL, "seasonNumber" integer NOT NULL, "status" integer NOT NULL DEFAULT (1), "createdAt" ${dbSyntaxMap.DATETIME} NOT NULL DEFAULT ${dbSyntaxMap.DATETIME_CURRENT}, "updatedAt" ${dbSyntaxMap.DATETIME} NOT NULL DEFAULT ${dbSyntaxMap.DATETIME_CURRENT}, "mediaId" integer)`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "season"`);
  }
}
