import { getDbSyntaxMap } from '@server/utils/DbColumnHelper';
import type { MigrationInterface, QueryRunner } from 'typeorm';

const dbSyntaxMap = getDbSyntaxMap();

export class AddWatchlists1682608634546 implements MigrationInterface {
  name = 'AddWatchlists1682608634546';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "watchlist" ("id" ${dbSyntaxMap.AUTOINCREMENT} NOT NULL, "ratingKey" varchar NOT NULL, "mediaType" varchar NOT NULL, "title" varchar NOT NULL, "tmdbId" integer NOT NULL, "createdAt" ${dbSyntaxMap.DATETIME} NOT NULL DEFAULT ${dbSyntaxMap.DATETIME_CURRENT}, "updatedAt" ${dbSyntaxMap.DATETIME} NOT NULL DEFAULT ${dbSyntaxMap.DATETIME_CURRENT}, "requestedById" integer, "mediaId" integer, CONSTRAINT "UNIQUE_USER_DB" UNIQUE ("tmdbId", "requestedById"))`
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_939f205946256cc0d2a1ac51a8" ON "watchlist" ("tmdbId") `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "IDX_939f205946256cc0d2a1ac51a8"`);
    await queryRunner.query(`DROP TABLE "watchlist"`);
  }
}
