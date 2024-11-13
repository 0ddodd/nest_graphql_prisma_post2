import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Movie {
  @Field(()=>Int)
  id: number;

  @Field()
  title: string;

  @Field({nullable: true})
  releaseDate?: string;

  @Field({nullable: true})
  genre?: string;

  @Field({nullable: true})
  director?: string;
}
