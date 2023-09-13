import dynamic from 'next/dynamic'
import { FC } from 'react'

import SubHeading from '@/components/ui/Heading/SubHeading'
import Banner from '@/components/ui/banner/Banner'
import Gallery from '@/components/ui/gallery/Gallery'

import Meta from '@/utils/meta/Meta'

import { IMoviePage } from '../../../../pages/movie/[slug]'

import Content from './Content/Content'

const DynamicVideoPlayer = dynamic(
	() => import('@/components/ui/video-player/VideoPlayer'),
	{
		ssr: false,
	}
)

const SingleMovie: FC<IMoviePage> = ({ similarMovies, movie }) => {
	return (
		<Meta title={movie?.title} description={`Watch ${movie?.title}`}>
			<Banner
				image={movie?.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>

			<DynamicVideoPlayer slug={movie.slug} videoSource={movie.videoUrl} />

			<div className="mt-12">
				<SubHeading title="Similar movies" />
				<Gallery items={similarMovies} />
			</div>

			{/* Rating */}
		</Meta>
	)
}

export default SingleMovie
