import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';  // Correct import for ApolloDriver
import { UserModule } from './user/user.module';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,  // Specify the driver (ApolloDriver)
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),  // Automatically generate schema
      playground: true,  // Enable GraphQL Playground
      introspection: true,  // Enable introspection
    }),
    UserModule,  // Import the User module
  ],
})
export class AppModule {}
