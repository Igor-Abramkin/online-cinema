import { FC } from 'react'

import Heading from '@/components/ui/Heading/Heading'
import SkeletonLoader from '@/components/ui/SkeletonLoader'

import Meta from '@/utils/meta/Meta'

import FavouriteItem from './FavouriteItem'
import styles from './Favourites.module.scss'
import { useFavourites } from './useFavourites'

const Favourites: FC = () => {
	const { favouriteMovies, isLoading } = useFavourites()
	return (
		<Meta title="Favorites">
			<Heading title="Favourites" />
			<section className={styles.favorites}>
				{isLoading ? (
					<SkeletonLoader
						count={3}
						className={styles.skeletonLoader}
						containerClassName={styles.containerLoader}
					/>
				) : (
					favouriteMovies?.map((movie) => (
						<FavouriteItem key={movie._id} movie={movie} />
					))
				)}
			</section>
		</Meta>
	)
}

export default Favourites
