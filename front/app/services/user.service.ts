import axios from 'api/interceptors'

import { IUser } from '@/shared/types/user.types'

import { getUserUrl } from '@/configs/api.config'

export const UserService = {
	async getAll(searchTerm?: string) {
		return axios.get<IUser[]>(getUserUrl(``), {
			params: searchTerm ? { searchTerm } : {},
		})
	},

	async deleteUser(_id: string) {
		return axios.delete<string>(getUserUrl(`/${_id}`))
	},
}
