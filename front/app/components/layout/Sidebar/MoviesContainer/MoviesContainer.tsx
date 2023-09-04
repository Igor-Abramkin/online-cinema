import { FC } from 'react'

import FavouriteMovies from './FavouriteMovies/FavouriteMovies'
import PopularMovies from './PopularMovies'

const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<FavouriteMovies />
		</div>
	)
}
export default MoviesContainer
