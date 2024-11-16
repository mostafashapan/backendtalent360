import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './models/user.model';
import { UpdateUserInput } from './dto/update-user.input'; // DTO to handle user updates

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  // Query to fetch a user by ID
  @Query(() => User)
  async user(@Args('id') id: number): Promise<User> {
    return this.userService.findOneById(id);
  }

  // Mutation to update user details
  @Mutation(() => User)
  async updateUser(
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<User> {
    return this.userService.updateUser(updateUserInput.id, updateUserInput);
  }
}
