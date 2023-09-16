import { useQuery } from 'react-query'

import { useAuth } from '@/hooks/useAuth'

import { UserService } from '@/services/user.service'

export const useFavourites = () => {
	const { user } = useAuth()

	const {
		isLoading,
		data: favouriteMovies,
		refetch,
	} = useQuery('favourite movies', () => UserService.getFavourites(), {
		select: ({ data }) => data,
		enabled: !!user,
	})

	return { isLoading, favouriteMovies, refetch }
}
