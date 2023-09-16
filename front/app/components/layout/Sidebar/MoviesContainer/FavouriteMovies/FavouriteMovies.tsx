import { FC } from 'react'

import { useFavourites } from '@/components/screens/favourites/useFavourites'
import SkeletonLoader from '@/components/ui/SkeletonLoader'

import { useAuth } from '@/hooks/useAuth'

import MovieList from '../MovieList'

import NotAuthFavourite from './NotAuthFavourite'

const FavouriteMovies: FC = () => {
	const { favouriteMovies, isLoading } = useFavourites()
	const { user } = useAuth()

	if (!user) return <NotAuthFavourite />

	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList
			link="/favorites"
			movies={favouriteMovies?.slice(0, 3) || []}
			title="Favourite Movies"
		/>
	)
}
export default FavouriteMovies
