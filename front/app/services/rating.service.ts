import axios from 'api/interceptors'

import { getRatingUrl } from '@/configs/api.config'

export const RatingService = {
	async setRating(movieId: string, value: number) {
		return axios.post<string>(getRatingUrl(`/set-rating`), { movieId, value })
	},

	async getByUserMovie(movieId: string) {
		return axios.get<number>(getRatingUrl(`/${movieId}`))
	},
}
