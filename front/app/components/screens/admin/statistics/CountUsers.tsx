import cn from 'classnames'
import { FC } from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/components/ui/SkeletonLoader'

import { AdminService } from '@/services/admin.service'

import styles from '../Admin.module.scss'

const CountUsers: FC = () => {
	const { isLoading, data: response } = useQuery('Count users', () =>
		AdminService.getCountUsers()
	)

	return (
		<div className={cn(styles.block, styles.countUsers)}>
			<div className={styles.number}>
				{isLoading ? <SkeletonLoader /> : <div>{response?.data}</div>}
				<div className={styles.description}>users</div>
			</div>
		</div>
	)
}

export default CountUsers
