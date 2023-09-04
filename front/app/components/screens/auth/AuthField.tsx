import { FC } from 'react'
import { FieldError, FormState, UseFormRegister } from 'react-hook-form'

import InputField from '@/components/ui/Form-elements/InputField'

import { validEmail } from '@/shared/regex'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<>
			<InputField
				{...register('email', {
					required: 'Email is required!',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email',
					},
				})}
				placeholder="E-mail"
				error={errors.email as FieldError}
			/>
			<InputField
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required!',
								minLength: {
									value: 6,
									message: 'Minimum password length is 6 symbols',
								},
						  }
						: {}
				)}
				placeholder="Password"
				type="password"
				error={errors.password as FieldError}
			/>
		</>
	)
}

export default AuthFields
