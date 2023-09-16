import { useQuery } from 'react-query'

import { UserService } from '@/services/user.service'

export const useFavourites = () => {
	const {
		isLoading,
		data: favouriteMovies,
		refetch,
	} = useQuery('favourite movies', () => UserService.getFavourites(), {
		select: ({ data }) => data,
	})

	return { isLoading, favouriteMovies, refetch }
}
