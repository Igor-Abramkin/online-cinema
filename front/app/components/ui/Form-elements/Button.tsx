import cn from 'classnames'
import { FC } from 'react'

import styles from './Form-elements.module.scss'
import { IButton } from './form-interface'

const Button: FC<IButton> = ({ children, className, ...rest }) => {
	return (
		<button className={cn(styles.button, className)} {...rest}>
			{children}
		</button>
	)
}

export default Button
