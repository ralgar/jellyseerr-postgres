import type { MigrationInterface, QueryRunner } from 'typeorm';
import { getAutoIncrementSyntax } from '@server/utils/dbIdioms';

const autoIncrementSyntax = getAutoIncrementSyntax();

export class AddJellyfinDeviceId1613670041760 implements MigrationInterface {
  name = 'AddJellyfinDeviceId1613670041760';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "temporary_user" ("id" ${autoIncrementSyntax} NOT NULL, "email" varchar NOT NULL, "username" varchar, "plexId" integer, "plexToken" varchar, "permissions" integer NOT NULL DEFAULT (0), "avatar" varchar NOT NULL, "createdAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, "password" varchar, "userType" integer NOT NULL DEFAULT (1), "plexUsername" varchar, "resetPasswordGuid" varchar, "recoveryLinkExpirationDate" date, "jellyfinUsername" varchar, "jellyfinAuthToken" varchar, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"))`
    );
    await queryRunner.query(
      'INSERT INTO "temporary_user"("id", "email", "username", "plexId", "plexToken", "permissions", "avatar", "createdAt", "updatedAt", "password", "userType", "plexUsername", "resetPasswordGuid", "recoveryLinkExpirationDate", "jellyfinUsername", "jellyfinAuthToken") SELECT "id", "email", "username", "plexId", "plexToken", "permissions", "avatar", "createdAt", "updatedAt", "password", "userType", "plexUsername", "resetPasswordGuid", "recoveryLinkExpirationDate", "jellyfinUsername", "jellyfinAuthToken" FROM "user"'
    );
    await queryRunner.query('DROP TABLE "user"');
    await queryRunner.query('ALTER TABLE "temporary_user" RENAME TO "user"');
    await queryRunner.query('DROP INDEX "IDX_7157aad07c73f6a6ae3bbd5ef5"');
    await queryRunner.query('DROP INDEX "IDX_41a289eb1fa489c1bc6f38d9c3"');
    await queryRunner.query('DROP INDEX "IDX_7ff2d11f6a83cb52386eaebe74"');
    await queryRunner.query(
      `CREATE TABLE "temporary_media" ("id" ${autoIncrementSyntax} NOT NULL, "mediaType" varchar NOT NULL, "tmdbId" integer NOT NULL, "tvdbId" integer, "imdbId" varchar, "status" integer NOT NULL DEFAULT (1), "status4k" integer NOT NULL DEFAULT (1), "createdAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, "lastSeasonChange" timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP), "mediaAddedAt" timestamp, "serviceId" integer, "serviceId4k" integer, "externalServiceId" integer, "externalServiceId4k" integer, "externalServiceSlug" varchar, "externalServiceSlug4k" varchar, "ratingKey" varchar, "ratingKey4k" varchar, CONSTRAINT "UQ_41a289eb1fa489c1bc6f38d9c3c" UNIQUE ("tvdbId"))`
    );
    await queryRunner.query(
      'INSERT INTO "temporary_media"("id", "mediaType", "tmdbId", "tvdbId", "imdbId", "status", "status4k", "createdAt", "updatedAt", "lastSeasonChange", "mediaAddedAt", "serviceId", "serviceId4k", "externalServiceId", "externalServiceId4k", "externalServiceSlug", "externalServiceSlug4k", "ratingKey", "ratingKey4k") SELECT "id", "mediaType", "tmdbId", "tvdbId", "imdbId", "status", "status4k", "createdAt", "updatedAt", "lastSeasonChange", "mediaAddedAt", "serviceId", "serviceId4k", "externalServiceId", "externalServiceId4k", "externalServiceSlug", "externalServiceSlug4k", "ratingKey", "ratingKey4k" FROM "media"'
    );
    await queryRunner.query('DROP TABLE "media"');
    await queryRunner.query('ALTER TABLE "temporary_media" RENAME TO "media"');
    await queryRunner.query(
      'CREATE INDEX "IDX_7157aad07c73f6a6ae3bbd5ef5" ON "media" ("tmdbId") '
    );
    await queryRunner.query(
      'CREATE INDEX "IDX_41a289eb1fa489c1bc6f38d9c3" ON "media" ("tvdbId") '
    );
    await queryRunner.query(
      'CREATE INDEX "IDX_7ff2d11f6a83cb52386eaebe74" ON "media" ("imdbId") '
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_user" ("id" ${autoIncrementSyntax} NOT NULL, "email" varchar NOT NULL, "username" varchar, "plexId" integer, "plexToken" varchar, "permissions" integer NOT NULL DEFAULT (0), "avatar" varchar NOT NULL, "createdAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, "password" varchar, "userType" integer NOT NULL DEFAULT (1), "plexUsername" varchar, "resetPasswordGuid" varchar, "recoveryLinkExpirationDate" date, "jellyfinUsername" varchar, "jellyfinAuthToken" varchar, "jellyfinUserId" varchar, "jellyfinDeviceId" varchar, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"))`
    );
    await queryRunner.query(
      'INSERT INTO "temporary_user"("id", "email", "username", "plexId", "plexToken", "permissions", "avatar", "createdAt", "updatedAt", "password", "userType", "plexUsername", "resetPasswordGuid", "recoveryLinkExpirationDate", "jellyfinUsername", "jellyfinAuthToken") SELECT "id", "email", "username", "plexId", "plexToken", "permissions", "avatar", "createdAt", "updatedAt", "password", "userType", "plexUsername", "resetPasswordGuid", "recoveryLinkExpirationDate", "jellyfinUsername", "jellyfinAuthToken" FROM "user"'
    );
    await queryRunner.query('DROP TABLE "user"');
    await queryRunner.query('ALTER TABLE "temporary_user" RENAME TO "user"');
    await queryRunner.query('DROP INDEX "IDX_7157aad07c73f6a6ae3bbd5ef5"');
    await queryRunner.query('DROP INDEX "IDX_41a289eb1fa489c1bc6f38d9c3"');
    await queryRunner.query('DROP INDEX "IDX_7ff2d11f6a83cb52386eaebe74"');
    await queryRunner.query(
      `CREATE TABLE "temporary_media" ("id" ${autoIncrementSyntax} NOT NULL, "mediaType" varchar NOT NULL, "tmdbId" integer NOT NULL, "tvdbId" integer, "imdbId" varchar, "status" integer NOT NULL DEFAULT (1), "status4k" integer NOT NULL DEFAULT (1), "createdAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, "lastSeasonChange" timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP), "mediaAddedAt" timestamp, "serviceId" integer, "serviceId4k" integer, "externalServiceId" integer, "externalServiceId4k" integer, "externalServiceSlug" varchar, "externalServiceSlug4k" varchar, "ratingKey" varchar, "ratingKey4k" varchar, "jellyfinMediaId" varchar, "jellyfinMediaId4k" varchar, CONSTRAINT "UQ_41a289eb1fa489c1bc6f38d9c3c" UNIQUE ("tvdbId"))`
    );
    await queryRunner.query(
      'INSERT INTO "temporary_media"("id", "mediaType", "tmdbId", "tvdbId", "imdbId", "status", "status4k", "createdAt", "updatedAt", "lastSeasonChange", "mediaAddedAt", "serviceId", "serviceId4k", "externalServiceId", "externalServiceId4k", "externalServiceSlug", "externalServiceSlug4k", "ratingKey", "ratingKey4k") SELECT "id", "mediaType", "tmdbId", "tvdbId", "imdbId", "status", "status4k", "createdAt", "updatedAt", "lastSeasonChange", "mediaAddedAt", "serviceId", "serviceId4k", "externalServiceId", "externalServiceId4k", "externalServiceSlug", "externalServiceSlug4k", "ratingKey", "ratingKey4k" FROM "media"'
    );
    await queryRunner.query('DROP TABLE "media"');
    await queryRunner.query('ALTER TABLE "temporary_media" RENAME TO "media"');
    await queryRunner.query(
      'CREATE INDEX "IDX_7157aad07c73f6a6ae3bbd5ef5" ON "media" ("tmdbId") '
    );
    await queryRunner.query(
      'CREATE INDEX "IDX_41a289eb1fa489c1bc6f38d9c3" ON "media" ("tvdbId") '
    );
    await queryRunner.query(
      'CREATE INDEX "IDX_7ff2d11f6a83cb52386eaebe74" ON "media" ("imdbId") '
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP INDEX "IDX_7ff2d11f6a83cb52386eaebe74"');
    await queryRunner.query('DROP INDEX "IDX_41a289eb1fa489c1bc6f38d9c3"');
    await queryRunner.query('DROP INDEX "IDX_7157aad07c73f6a6ae3bbd5ef5"');
    await queryRunner.query('ALTER TABLE "media" RENAME TO "temporary_media"');
    await queryRunner.query(
      `CREATE TABLE "media" ("id" ${autoIncrementSyntax} NOT NULL, "mediaType" varchar NOT NULL, "tmdbId" integer NOT NULL, "tvdbId" integer, "imdbId" varchar, "status" integer NOT NULL DEFAULT (1), "status4k" integer NOT NULL DEFAULT (1), "createdAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, "lastSeasonChange" timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP), "mediaAddedAt" timestamp, "serviceId" integer, "serviceId4k" integer, "externalServiceId" integer, "externalServiceId4k" integer, "externalServiceSlug" varchar, "externalServiceSlug4k" varchar, "ratingKey" varchar, "ratingKey4k" varchar, CONSTRAINT "UQ_41a289eb1fa489c1bc6f38d9c3c" UNIQUE ("tvdbId"))`
    );
    await queryRunner.query(
      'INSERT INTO "media"("id", "mediaType", "tmdbId", "tvdbId", "imdbId", "status", "status4k", "createdAt", "updatedAt", "lastSeasonChange", "mediaAddedAt", "serviceId", "serviceId4k", "externalServiceId", "externalServiceId4k", "externalServiceSlug", "externalServiceSlug4k", "ratingKey", "ratingKey4k") SELECT "id", "mediaType", "tmdbId", "tvdbId", "imdbId", "status", "status4k", "createdAt", "updatedAt", "lastSeasonChange", "mediaAddedAt", "serviceId", "serviceId4k", "externalServiceId", "externalServiceId4k", "externalServiceSlug", "externalServiceSlug4k", "ratingKey", "ratingKey4k" FROM "temporary_media"'
    );
    await queryRunner.query('DROP TABLE "temporary_media"');
    await queryRunner.query(
      'CREATE INDEX "IDX_7ff2d11f6a83cb52386eaebe74" ON "media" ("imdbId") '
    );
    await queryRunner.query(
      'CREATE INDEX "IDX_41a289eb1fa489c1bc6f38d9c3" ON "media" ("tvdbId") '
    );
    await queryRunner.query(
      'CREATE INDEX "IDX_7157aad07c73f6a6ae3bbd5ef5" ON "media" ("tmdbId") '
    );
    await queryRunner.query('ALTER TABLE "user" RENAME TO "temporary_user"');
    await queryRunner.query(
      `CREATE TABLE "user" ("id" ${autoIncrementSyntax} NOT NULL, "email" varchar NOT NULL, "username" varchar, "plexId" integer, "plexToken" varchar, "permissions" integer NOT NULL DEFAULT (0), "avatar" varchar NOT NULL, "createdAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, "password" varchar, "userType" integer NOT NULL DEFAULT (1), "plexUsername" varchar, "resetPasswordGuid" varchar, "recoveryLinkExpirationDate" date, "jellyfinUsername" varchar, "jellyfinAuthToken" varchar, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"))`
    );
    await queryRunner.query(
      'INSERT INTO "user"("id", "email", "username", "plexId", "plexToken", "permissions", "avatar", "createdAt", "updatedAt", "password", "userType", "plexUsername", "resetPasswordGuid", "recoveryLinkExpirationDate", "jellyfinUsername", "jellyfinAuthToken") SELECT "id", "email", "username", "plexId", "plexToken", "permissions", "avatar", "createdAt", "updatedAt", "password", "userType", "plexUsername", "resetPasswordGuid", "recoveryLinkExpirationDate", "jellyfinUsername", "jellyfinAuthToken" FROM "temporary_user"'
    );
    await queryRunner.query('DROP TABLE "temporary_user"');
    await queryRunner.query('DROP INDEX "IDX_7ff2d11f6a83cb52386eaebe74"');
    await queryRunner.query('DROP INDEX "IDX_41a289eb1fa489c1bc6f38d9c3"');
    await queryRunner.query('DROP INDEX "IDX_7157aad07c73f6a6ae3bbd5ef5"');
    await queryRunner.query('ALTER TABLE "media" RENAME TO "temporary_media"');
    await queryRunner.query(
      `CREATE TABLE "media" ("id" ${autoIncrementSyntax} NOT NULL, "mediaType" varchar NOT NULL, "tmdbId" integer NOT NULL, "tvdbId" integer, "imdbId" varchar, "status" integer NOT NULL DEFAULT (1), "status4k" integer NOT NULL DEFAULT (1), "createdAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, "lastSeasonChange" timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP), "mediaAddedAt" timestamp, "serviceId" integer, "serviceId4k" integer, "externalServiceId" integer, "externalServiceId4k" integer, "externalServiceSlug" varchar, "externalServiceSlug4k" varchar, "ratingKey" varchar, "ratingKey4k" varchar, "jellyfinMediaID" varchar, "jellyfinMediaID4k" varchar, CONSTRAINT "UQ_41a289eb1fa489c1bc6f38d9c3c" UNIQUE ("tvdbId"))`
    );
    await queryRunner.query(
      'INSERT INTO "media"("id", "mediaType", "tmdbId", "tvdbId", "imdbId", "status", "status4k", "createdAt", "updatedAt", "lastSeasonChange", "mediaAddedAt", "serviceId", "serviceId4k", "externalServiceId", "externalServiceId4k", "externalServiceSlug", "externalServiceSlug4k", "ratingKey", "ratingKey4k") SELECT "id", "mediaType", "tmdbId", "tvdbId", "imdbId", "status", "status4k", "createdAt", "updatedAt", "lastSeasonChange", "mediaAddedAt", "serviceId", "serviceId4k", "externalServiceId", "externalServiceId4k", "externalServiceSlug", "externalServiceSlug4k", "ratingKey", "ratingKey4k" FROM "temporary_media"'
    );
    await queryRunner.query('DROP TABLE "temporary_media"');
    await queryRunner.query(
      'CREATE INDEX "IDX_7ff2d11f6a83cb52386eaebe74" ON "media" ("imdbId") '
    );
    await queryRunner.query(
      'CREATE INDEX "IDX_41a289eb1fa489c1bc6f38d9c3" ON "media" ("tvdbId") '
    );
    await queryRunner.query(
      'CREATE INDEX "IDX_7157aad07c73f6a6ae3bbd5ef5" ON "media" ("tmdbId") '
    );
    await queryRunner.query('ALTER TABLE "user" RENAME TO "temporary_user"');
    await queryRunner.query(
      `CREATE TABLE "user" ("id" ${autoIncrementSyntax} NOT NULL, "email" varchar NOT NULL, "username" varchar, "plexId" integer, "plexToken" varchar, "permissions" integer NOT NULL DEFAULT (0), "avatar" varchar NOT NULL, "createdAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, "password" varchar, "userType" integer NOT NULL DEFAULT (1), "plexUsername" varchar, "resetPasswordGuid" varchar, "recoveryLinkExpirationDate" date, "jellyfinUsername" varchar, "jellyfinId" varchar, "jellyfinAuthToken" varchar, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"))`
    );
    await queryRunner.query(
      'INSERT INTO "user"("id", "email", "username", "plexId", "plexToken", "permissions", "avatar", "createdAt", "updatedAt", "password", "userType", "plexUsername", "resetPasswordGuid", "recoveryLinkExpirationDate", "jellyfinUsername", "jellyfinAuthToken") SELECT "id", "email", "username", "plexId", "plexToken", "permissions", "avatar", "createdAt", "updatedAt", "password", "userType", "plexUsername", "resetPasswordGuid", "recoveryLinkExpirationDate", "jellyfinUsername", "jellyfinAuthToken" FROM "temporary_user"'
    );
    await queryRunner.query('DROP TABLE "temporary_user"');
  }
}
