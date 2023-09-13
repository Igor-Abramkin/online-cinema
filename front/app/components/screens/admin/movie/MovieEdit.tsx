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

import { IMovieEditInput } from './movie-edit.interface'
import { useAdminActors } from './useAdminActors'
import { useAdminGenres } from './useAdminGenres'
import { useMovieEdit } from './useMovieEdit'

const DynamicSelect = dynamic(() => import('@/ui/select/Select'), {
	ssr: false,
})

const MovieEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IMovieEditInput>({
		mode: 'onChange',
	})
	const { isLoading, onSubmit } = useMovieEdit(setValue)
	const { isLoading: isGenresLoading, data: genres } = useAdminGenres()
	const { isLoading: isActorsLoading, data: actors } = useAdminActors()

	return (
		<Meta title="Edit Movie">
			<AdminNavigation />
			<Heading title="Edit movie" />
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={formStyles.fields}>
							<InputField
								{...register('title', {
									required: 'Title is required!',
								})}
								placeholder="Title"
								error={errors.title}
							/>
							<SlugField
								register={register}
								error={errors.slug}
								generate={() => {
									setValue('slug', generateSlug(getValues('title')))
								}}
							/>
							<InputField
								{...register('parameters.country', {
									required: 'Country is required',
								})}
								placeholder="Country"
								error={errors.parameters?.country}
								style={{ width: '31%' }}
							/>
							<InputField
								{...register('parameters.duration', {
									required: 'Duration is required',
								})}
								placeholder="Duration (min)"
								error={errors.parameters?.duration}
								style={{ width: '31%' }}
							/>
							<InputField
								{...register('parameters.year', {
									required: 'Year is required',
								})}
								placeholder="Year"
								error={errors.parameters?.year}
								style={{ width: '31%' }}
							/>
							<Controller
								name="genres"
								control={control}
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										field={field}
										options={genres || []}
										isLoading={isGenresLoading}
										isMulti
										placeholder="Genres"
										error={error}
									/>
								)}
								rules={{
									required: 'Please select at least one genre!',
								}}
							/>
							<Controller
								name="actors"
								control={control}
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										field={field}
										options={actors || []}
										isLoading={isActorsLoading}
										isMulti
										placeholder="Actors"
										error={error}
									/>
								)}
								rules={{
									required: 'Please select at least one genre!',
								}}
							/>
							<Controller
								name="poster"
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
										folder="movies"
										placeholder="Poster"
									/>
								)}
								rules={{
									required: 'Poster is required',
								}}
							/>
							<Controller
								name="bigPoster"
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
										folder="movies"
										placeholder="big Poster"
									/>
								)}
								rules={{
									required: 'Big poster is required',
								}}
							/>
							<Controller
								name="videoUrl"
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
										folder="movies"
										placeholder="Video"
										isNoImage
									/>
								)}
								rules={{
									required: 'Video is required',
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

export default MovieEdit
