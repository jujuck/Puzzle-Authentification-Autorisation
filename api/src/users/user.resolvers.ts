import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import * as argon2 from "argon2";
// Some code here
import { Users, LoginOutPut } from "./user.entities";

// Some code here

const hashOptions = {
  type: argon2.argon2d,
  memoryCost: 2 ** 16,
  hashLength: 50,
};
@Resolver()
export class UsersResolver {
  // Some code here

  @Mutation(() => LoginOutPut)
  async login(@Arg("data") data: UserInput) {
    try {
      console.info(data);
      // Some code here
      // Some code here
    } catch (error) {
      throw new Error(error);
    }
  }
}
