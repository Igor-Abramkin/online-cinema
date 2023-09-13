import { IMovie } from '@/shared/types/movie.types'

export interface IMoviesCatalog {
	title: string
	description?: string
	movies: IMovie[]
}
