import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Movie {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  releaseDate: string;

  @Field()
  genre: string;

  @Field()
  director: string;
}
