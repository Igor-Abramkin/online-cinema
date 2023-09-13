import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { UserService } from '@/services/user.service'

import { getKeys } from '@/utils/object/getKeys'
import { toastError } from '@/utils/toast-error'

import { IProfileUnput } from './profile.interface'

export const useProfile = (setValue: UseFormSetValue<IProfileUnput>) => {
	const { isLoading } = useQuery('profile', () => UserService.getProfile(), {
		onSuccess({ data }) {
			setValue('email', data.email)
		},
		onError(error) {
			toastError(error, 'Get profile')
		},
	})

	const { mutateAsync } = useMutation(
		'update user',
		(data: IProfileUnput) => UserService.updateProfile(data),
		{
			onError(error) {
				toastError(error, 'Update user')
			},
			onSuccess() {
				toastr.success('Update profile', 'update was successful')
			},
		}
	)

	const onSubmit: SubmitHandler<IProfileUnput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
