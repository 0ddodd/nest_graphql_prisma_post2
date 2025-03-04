import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieResolver } from './movie.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [MovieResolver, MovieService, PrismaService],
})
export class MovieModule {}
