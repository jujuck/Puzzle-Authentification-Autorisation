import { DataSource } from "typeorm";
import { Trainers } from "../trainers/trainer.entity";
import "dotenv/config";
import { Users } from "../users/user.entities";

const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const dataSource = new DataSource({
  entities: [Trainers, Users],
  type: "postgres",
  host: "db",
  port: 5432,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: false,
  migrations: ["src/migrations/*.ts"],
});

export default dataSource;
