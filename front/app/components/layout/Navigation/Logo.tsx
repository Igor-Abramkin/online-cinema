import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImages from '@/assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link href="/">
			<a className="px-layout mb-10 block">
				<Image
					src={logoImages}
					width={450}
					height={68}
					alt="Online Cinema"
					draggable={false}
				/>
			</a>
		</Link>
	)
}

export default Logo
