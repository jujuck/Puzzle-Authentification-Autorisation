import { Query, Resolver } from "type-graphql";
import { Trainers } from "./trainer.entity";

@Resolver()
export class TrainersResolver {
  // Some code here
  @Query(() => [Trainers])
  async getAllTrainers(): Promise<Trainers[]> {
    try {
      const result = await Trainers.find();
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}
