import cn from 'classnames'
import { FC, useEffect, useState } from 'react'
import { useMutation } from 'react-query'

import { UserService } from '@/services/user.service'

import { toastError } from '@/utils/toast-error'

import { useFavourites } from '../../favourites/useFavourites'

import styles from './FavouriteButton.module.scss'
import HeartImage from './heart-animation.png'

const FavouriteButton: FC<{ movieId: string }> = ({ movieId }) => {
	const [isSmashed, setIsSmashed] = useState(false)

	const { favouriteMovies, refetch } = useFavourites()

	useEffect(() => {
		if (!favouriteMovies) return

		const isHasMovie = favouriteMovies.some((f) => f._id == movieId)
		if (isSmashed !== isHasMovie) setIsSmashed(isHasMovie)
	}, [favouriteMovies, isSmashed, movieId])

	const { mutateAsync } = useMutation(
		'update favourites',
		() => UserService.toggleFavorite(movieId),
		{
			onError(error) {
				toastError(error, 'Update favourites list')
			},
			onSuccess() {
				setIsSmashed(!isSmashed)
				refetch()
			},
		}
	)

	return (
		<button
			onClick={() => mutateAsync()}
			className={cn(styles.button, { [styles.animate]: isSmashed })}
			style={{ backgroundImage: `url('/heart-animation.png')` }}
		/>
	)
}

export default FavouriteButton
