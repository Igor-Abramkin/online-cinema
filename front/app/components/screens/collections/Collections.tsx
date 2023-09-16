import { FC } from 'react'

import Description from '@/components/ui/Heading/Description'
import Heading from '@/components/ui/Heading/Heading'

import Meta from '@/utils/meta/Meta'

import styles from './Collections.module.scss'
import CollectionsItem from './CollectionsItem'
import { ICollection } from './collections.interface'

const title = 'Discovery'
const description = 'In this section you will find all genres on our site'

const Collections: FC<{ collections: ICollection[] }> = ({ collections }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={styles.heading} />
			<Description text={description} className={styles.description} />
			<section className={styles.collections}>
				{collections.map((c) => (
					<CollectionsItem key={c._id} collection={c} />
				))}
			</section>
		</Meta>
	)
}

export default Collections
