import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { MovieModule } from './movie/movie.module';
import { CollectionModule } from './collection/collection.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true
      // autoSchemaFile: false,
      // typePaths: ['./**/*.gql'],
      // installSubscriptionHandlers: true,
    }),
    MovieModule,
    CollectionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
