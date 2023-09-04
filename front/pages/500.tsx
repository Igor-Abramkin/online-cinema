import Heading from '@/components/ui/Heading/Heading'

import Meta from '@/utils/meta/Meta'

export default function Error404() {
	return (
		<Meta title="Page not found">
			<Heading title="500 - Server-side error occurred" />
		</Meta>
	)
}
