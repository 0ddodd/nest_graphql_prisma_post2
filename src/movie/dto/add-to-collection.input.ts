import {InputType, Field, Int} from '@nestjs/graphql';
// 컬렉션에 영화 추가

@InputType()
export class AddToCollectionInput {
    @Field(() => Int)
    movieId: number;
}