import { axiosClassic } from 'api/interceptors'
import axios from 'api/interceptors'

import { IActorEditInput } from '@/components/screens/admin/actor/actor-edit.interface'

import { IActor } from '@/shared/types/movie.types'

import { getActorUrl } from '@/configs/api.config'

export const ActorService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IActor[]>(getActorUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},

	async getById(_id: string) {
		return axios.get<IActorEditInput>(getActorUrl(`/${_id}`))
	},
	async update(_id: string, data: IActorEditInput) {
		return axios.put<string>(getActorUrl(`/${_id}`), data)
	},

	async create() {
		return axios.post<string>(getActorUrl(`/`))
	},

	async delete(_id: string) {
		return axios.delete<string>(getActorUrl(`/${_id}`))
	},
}
