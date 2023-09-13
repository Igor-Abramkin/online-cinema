import { FC } from 'react'

import Meta from '@/utils/meta/Meta'

import { getMovieUrl } from '@/configs/url.config'

import Description from '../Heading/Description'
import Heading from '../Heading/Heading'
import GalleryItem from '../gallery/GalleryItem'

import styles from './MoviesCatalog.module.scss'
import { IMoviesCatalog } from './moviesCatalog.interface'

const MoviesCatalog: FC<IMoviesCatalog> = ({ movies, title, description }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={styles.heading} />
			{description && (
				<Description text={description} className={styles.description} />
			)}

			<section className={styles.movies}>
				{movies.map((movie) => (
					<GalleryItem
						key={movie._id}
						item={{
							name: movie.title,
							link: getMovieUrl(movie.slug),
							posterPath: movie.bigPoster,
							content: {
								title: movie.title,
							},
						}}
						variant="horizontal"
					/>
				))}
			</section>
		</Meta>
	)
}

export default MoviesCatalog
