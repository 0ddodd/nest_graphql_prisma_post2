import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMovieInput {
  @Field()
  title: string;
  releaseDate?: string;
  genre?: string;
  director?: string;
}
