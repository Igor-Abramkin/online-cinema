import { GetStaticProps, NextPage } from 'next'

import MoviesCatalog from '@/components/ui/movies-catalog/MoviesCatalog'

import { IMovie } from '@/shared/types/movie.types'

import { MovieService } from '@/services/movie.service'

const TrendingPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<MoviesCatalog
			movies={movies || []}
			title="Trending movies"
			description="Trending movies in excellent quality: legal, safe, without ADS"
		/>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const movies = await MovieService.getMostPopularMovies()
		return {
			props: {
				movies,
			},
			revalidate: 60,
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export default TrendingPage
