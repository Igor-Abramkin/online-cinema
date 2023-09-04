import { FC } from 'react'

import Logo from './Logo'
import MenuContainer from './MenuContainer/MenuContainer'
import styles from './Navigation.module.scss'

const Navigation: FC = () => {
	return (
		<div className={styles.Navigation}>
			<Logo />
			<MenuContainer />
		</div>
	)
}

export default Navigation
