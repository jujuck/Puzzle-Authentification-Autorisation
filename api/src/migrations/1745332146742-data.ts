import { MigrationInterface, QueryRunner } from "typeorm";

export class Data1745332146742 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO trainer (lastname, firstname, sex, age,  city, speciality) SELECT lastname, firstname, sex, age,  city, speciality FROM csvimport`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
