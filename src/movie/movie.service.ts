import { Injectable } from '@nestjs/common';
import { CreateMovieInput } from './dto/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MovieService {
  constructor(private prisma: PrismaService) {}

  create(createMovieInput: CreateMovieInput) {
    return this.prisma.movie.create({
      data: {
        title: createMovieInput.title,
        genre: createMovieInput.genre,
        releaseDate: createMovieInput.releaseDate,
        director: createMovieInput.director
      }
    });
  }

  findAll() {
    return this.prisma.movie.findMany();
  }

  findOne(id: number) {
    return this.prisma.movie.findUnique({where: {id}});
  }

  update(id: number, updateMovieInput: UpdateMovieInput) {
    return this.prisma.movie.update({
      where: {id},
      data: {
        title: updateMovieInput.title,
        genre: updateMovieInput.genre,
        releaseDate: updateMovieInput.releaseDate,
        director: updateMovieInput.director
      }
    });
  }

  remove(id: number) {
    return this.prisma.movie.delete({where: {id}});
  }
}
