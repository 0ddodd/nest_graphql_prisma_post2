import { CreateMovieInput } from './create-movie.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMovieInput extends PartialType(CreateMovieInput) {
  @Field(() => Int)
  id: number;
  
  @Field()
  title: string;
  
  @Field({ nullable: true })
  releaseDate?: string;
  
  @Field({ nullable: true })
  genre?: string;
  
  @Field({nullable: true })
  director?: string;
}
