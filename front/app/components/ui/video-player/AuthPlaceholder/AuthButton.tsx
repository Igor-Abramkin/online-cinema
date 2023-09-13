import Link from 'next/link'
import { FC } from 'react'

import { getMovieUrl } from '@/configs/url.config'

import styles from './AuthPlaceholder.module.scss'

const AuthButton: FC<{ slug: string }> = ({ slug }) => {
	return (
		<Link href={`/auth?redirect=${getMovieUrl(slug)}`}>
			<a className={styles.btn}>Log In</a>
		</Link>
	)
}

export default AuthButton
