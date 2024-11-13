import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMovieInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  releaseDate?: string;

  @Field({ nullable: true })
  genre?: string;

  @Field({ nullable: true })
  director?: string;
}
