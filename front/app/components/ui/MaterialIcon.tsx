import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { TypeMaterialIconName } from '@/shared/types/icon.types'

export const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
	const IconComponent = MaterialIcons[name]

	if (IconComponent) {
		return <IconComponent />
	} else {
		console.warn(`Icon '${name}' not found.`)
		return <MaterialIcons.MdDragIndicator />
	}
}
