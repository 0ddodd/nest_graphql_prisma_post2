import { CreateMovieInput } from './create-movie.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMovieInput extends PartialType(CreateMovieInput) {
  @Field()
  id: number;
  title: string;
  releaseDate?: string;
  genre?: string;
  director?: string;
}
