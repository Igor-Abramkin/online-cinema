import dynamic from 'next/dynamic'
import { FC } from 'react'

import PopularMovies from './PopularMovies'

const DynamicFavouriteMovies = dynamic(
	() => import('./FavouriteMovies/FavouriteMovies'),
	{
		ssr: false,
	}
)

const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<DynamicFavouriteMovies />
		</div>
	)
}
export default MoviesContainer
