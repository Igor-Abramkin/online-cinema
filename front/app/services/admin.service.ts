import axios from 'api/interceptors'

import { getUserUrl } from '@/configs/api.config'

export const AdminService = {
	async getCountUsers() {
		return axios.get<number>(getUserUrl('/count'))
	},
}
