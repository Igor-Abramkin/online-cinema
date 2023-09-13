import dynamic from 'next/dynamic'
import { FC } from 'react'

import { IMenu } from './Menu.interface'
import styles from './Menu.module.scss'
import MenuItem from './MenuItem'

const DynamicAuthItems = dynamic(() => import('./Auth/AuthItems'), {
	ssr: false,
})

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul className={styles.ul}>
				{items.map((item) => (
					<MenuItem item={item} key={item.link} />
				))}
				{title == 'General' ? <DynamicAuthItems /> : null}
			</ul>
		</div>
	)
}

export default Menu
