import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

import SkeletonLoader from '@/components/ui/SkeletonLoader'

import Menu from '../Menu'

import { usePopularGenres } from './UsePopularGenres'

const GenreMenu = () => {
	const { isLoading, data } = usePopularGenres()

	return isLoading || data == undefined ? (
		<div className="mx-11 mb-6">
			<SkeletonLoader count={5} className="h-7 mt-6" />
		</div>
	) : (
		<Menu menu={{ title: 'Popular genres', items: data || [] }} />
	)
}

export default GenreMenu
