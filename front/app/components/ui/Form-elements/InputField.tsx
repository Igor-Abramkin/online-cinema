import cn from 'classnames'
import { forwardRef } from 'react'

import styles from './Form-elements.module.scss'
import { IField } from './form.interface'

const InputField = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={cn(styles.common, styles.InputField)} style={style}>
				<label>
					<span>{placeholder}</span>
					<input ref={ref} type={type} {...rest} />
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)
InputField.displayName = 'InputField'

export default InputField
