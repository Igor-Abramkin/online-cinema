import { FC } from 'react'

import GenreMenu from './Genres/GenreMenu'
import Menu from './Menu'
import { firstMenu, userMenu } from './Menu.data'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			<GenreMenu />
			<Menu menu={userMenu} />
		</div>
	)
}

export default MenuContainer
