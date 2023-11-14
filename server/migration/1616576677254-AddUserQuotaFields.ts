import { getDbSyntaxMap } from '@server/utils/DbColumnHelper';
import type { MigrationInterface, QueryRunner } from 'typeorm';

const dbSyntaxMap = getDbSyntaxMap();

export class AddUserQuotaFields1616576677254 implements MigrationInterface {
  name = 'AddUserQuotaFields1616576677254';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "temporary_user" ("id" ${dbSyntaxMap.AUTOINCREMENT} NOT NULL, "email" varchar NOT NULL, "username" varchar, "plexId" integer, "plexToken" varchar, "permissions" integer NOT NULL DEFAULT (0), "avatar" varchar NOT NULL, "createdAt" ${dbSyntaxMap.DATETIME} NOT NULL DEFAULT ${dbSyntaxMap.DATETIME_CURRENT}, "updatedAt" ${dbSyntaxMap.DATETIME} NOT NULL DEFAULT ${dbSyntaxMap.DATETIME_CURRENT}, "password" varchar, "userType" integer NOT NULL DEFAULT (1), "plexUsername" varchar, "resetPasswordGuid" varchar, "recoveryLinkExpirationDate" date, "movieQuotaLimit" integer, "movieQuotaDays" integer, "tvQuotaLimit" integer, "tvQuotaDays" integer, "jellyfinUsername" varchar, "jellyfinAuthToken" varchar, "jellyfinUserId" varchar, "jellyfinDeviceId" varchar, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"))`
    );
    await queryRunner.query(
      `INSERT INTO "temporary_user"("id", "email", "username", "plexId", "plexToken", "permissions", "avatar", "createdAt", "updatedAt", "password", "userType", "plexUsername", "resetPasswordGuid", "recoveryLinkExpirationDate", "jellyfinUsername", "jellyfinAuthToken", "jellyfinUserId", "jellyfinDeviceId") SELECT "id", "email", "username", "plexId", "plexToken", "permissions", "avatar", "createdAt", "updatedAt", "password", "userType", "plexUsername", "resetPasswordGuid", "recoveryLinkExpirationDate", "jellyfinUsername", "jellyfinAuthToken", "jellyfinUserId", "jellyfinDeviceId" FROM "user"`
    );
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
    await queryRunner.query(
      `CREATE TABLE "user" ("id" ${dbSyntaxMap.AUTOINCREMENT} NOT NULL, "email" varchar NOT NULL, "username" varchar, "plexId" integer, "plexToken" varchar, "permissions" integer NOT NULL DEFAULT (0), "avatar" varchar NOT NULL, "createdAt" ${dbSyntaxMap.DATETIME} NOT NULL DEFAULT ${dbSyntaxMap.DATETIME_CURRENT}, "updatedAt" ${dbSyntaxMap.DATETIME} NOT NULL DEFAULT ${dbSyntaxMap.DATETIME_CURRENT}, "password" varchar, "userType" integer NOT NULL DEFAULT (1), "plexUsername" varchar, "resetPasswordGuid" varchar, "recoveryLinkExpirationDate" date, "jellyfinUsername" varchar, "jellyfinAuthToken" varchar, "jellyfinUserId" varchar, "jellyfinDeviceId" varchar, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"))`
    );
    await queryRunner.query(
      `INSERT INTO "user"("id", "email", "username", "plexId", "plexToken", "permissions", "avatar", "createdAt", "updatedAt", "password", "userType", "plexUsername", "resetPasswordGuid", "recoveryLinkExpirationDate", "jellyfinUsername", "jellyfinAuthToken", "jellyfinUserId", "jellyfinDeviceId") SELECT "id", "email", "username", "plexId", "plexToken", "permissions", "avatar", "createdAt", "updatedAt", "password", "userType", "plexUsername", "resetPasswordGuid", "recoveryLinkExpirationDate", "jellyfinUsername", "jellyfinAuthToken", "jellyfinUserId", "jellyfinDeviceId" FROM "temporary_user"`
    );
    await queryRunner.query(`DROP TABLE "temporary_user"`);
  }
}
