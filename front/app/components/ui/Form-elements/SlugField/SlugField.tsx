import { FC } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

import InputField from '../InputField'

import styles from './SlugField.module.scss'

interface ISlugField {
	error?: FieldError
	register: UseFormRegister<any>
	generate: () => void
}

const SlugField: FC<ISlugField> = ({ generate, error, register }) => {
	return (
		<div className="relative">
			<InputField
				{...register('slug', {
					required: 'Slug is required',
				})}
				placeholder="Slug"
				error={error}
			/>

			<div className={styles.badge} onClick={generate}>
				Generate
			</div>
		</div>
	)
}

export default SlugField
