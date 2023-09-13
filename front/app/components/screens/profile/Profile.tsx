import { FC } from 'react'
import { useForm } from 'react-hook-form'

import Button from '@/components/ui/Form-elements/Button'
import Heading from '@/components/ui/Heading/Heading'
import SkeletonLoader from '@/components/ui/SkeletonLoader'

import Meta from '@/utils/meta/Meta'

import AuthFields from '../auth/AuthField'

import styles from './Profile.module.scss'
import { IProfileUnput } from './profile.interface'
import { useProfile } from './useProfile'

const Profile: FC = () => {
	const { handleSubmit, register, formState, setValue } =
		useForm<IProfileUnput>({
			mode: 'onChange',
		})

	const { isLoading, onSubmit } = useProfile(setValue)
	return (
		<Meta title="Profile">
			<Heading title="Profile" className="mb-6" />
			<form onSubmit={handleSubmit(onSubmit)}>
				{isLoading ? (
					<SkeletonLoader count={2} />
				) : (
					<AuthFields register={register} formState={formState} />
				)}
				<Button>Update</Button>
			</form>
		</Meta>
	)
}

export default Profile
