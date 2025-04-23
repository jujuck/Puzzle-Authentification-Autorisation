import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1745332136519 implements MigrationInterface {
  name = "Init1745332136519";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "trainer" ("id" SERIAL NOT NULL, "lastname" character varying NOT NULL, "firstname" character varying NOT NULL, "age" integer NOT NULL, "city" character varying NOT NULL, "sex" character varying NOT NULL, "speciality" character varying NOT NULL, CONSTRAINT "PK_8dfa741df6d52a0da8ad93f0c7e" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "hash" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "trainer"`);
  }
}
