import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'

import Button from '@/components/ui/Form-elements/Button'
import InputField from '@/components/ui/Form-elements/InputField'
import SlugField from '@/components/ui/Form-elements/SlugField/SlugField'
import UploadField from '@/components/ui/Form-elements/UploadField/UploadField'
import Heading from '@/components/ui/Heading/Heading'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'

import Meta from '@/utils/meta/Meta'
import { generateSlug } from '@/utils/string/generateSlug'

import formStyles from '../../../ui/Form-elements/admin-form.module.scss'

import { IActorEditInput } from './actor-edit.interface'
import { useActorEdit } from './useActorEdit'

const ActorEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IActorEditInput>({
		mode: 'onChange',
	})
	const { isLoading, onSubmit } = useActorEdit(setValue)

	return (
		<Meta title="Edit Actor">
			<AdminNavigation />
			<Heading title="Edit actor" />
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={formStyles.fields}>
							<InputField
								{...register('name', {
									required: 'Name is required',
								})}
								placeholder="Name"
								error={errors.name}
							/>
							<div>
								<SlugField
									register={register}
									error={errors.slug}
									generate={() => {
										setValue('slug', generateSlug(getValues('name')))
									}}
								/>
							</div>

							<Controller
								name="photo"
								control={control}
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										folder="actors"
										placeholder="Photo"
									/>
								)}
								rules={{
									required: 'Photo is required',
								}}
							/>
						</div>
						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	)
}

export default ActorEdit
