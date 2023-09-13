import axios from 'api/interceptors'

import { IProfileUnput } from '@/components/screens/profile/profile.interface'

import { IUser } from '@/shared/types/user.types'

import { getUserUrl } from '@/configs/api.config'

export const UserService = {
	async getAll(searchTerm?: string) {
		return axios.get<IUser[]>(getUserUrl(``), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async getProfile() {
		return axios.get<IUser>(getUserUrl(`/profile`))
	},
	async updateProfile(data: IProfileUnput) {
		return axios.put<string>(getUserUrl(`/profile`), data)
	},
	async update(_id: string, data: IProfileUnput) {
		return axios.put<string>(getUserUrl(`/${_id}`), data)
	},
	async getById(_id: string) {
		return axios.get<IUser>(getUserUrl(`/${_id}`))
	},

	async deleteUser(_id: string) {
		return axios.delete<string>(getUserUrl(`/${_id}`))
	},
}
