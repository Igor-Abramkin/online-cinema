import { axiosClassic } from 'api/interceptors'
import axios from 'api/interceptors'

import { IMovieEditInput } from '@/components/screens/admin/movie/movie-edit.interface'

import { IMovie } from '@/shared/types/movie.types'

import { getMovieUrl } from '@/configs/api.config'

export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMovieUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},

	async getBySlug(slug: string) {
		return axiosClassic.get<IMovie>(getMovieUrl(`/by-slug/${slug}`))
	},
	async getById(_id: string) {
		return axios.get<IMovieEditInput>(getMovieUrl(`/${_id}`))
	},
	async getByGenres(genreIds: string[]) {
		return axiosClassic.post<IMovie[]>(getMovieUrl(`/by-genres/`), {
			genreIds,
		})
	},
	async getByActor(actorId: string) {
		return axiosClassic.get<IMovie[]>(getMovieUrl(`/by-actor/${actorId}`))
	},
	async create() {
		return axios.post<string>(getMovieUrl(`/`))
	},
	async update(_id: string, data: IMovieEditInput) {
		return axios.put<string>(getMovieUrl(`/${_id}`), data)
	},
	async updateCountOpened(slug: string) {
		return axiosClassic.post<string>(getMovieUrl('/update-count-opened'), {
			slug,
		})
	},

	async getMostPopularMovies() {
		const { data: movies } = await axiosClassic.get<IMovie[]>(
			getMovieUrl('/most-popular')
		)
		return movies
	},

	async delete(_id: string) {
		return axios.delete<string>(getMovieUrl(`/${_id}`))
	},
}
