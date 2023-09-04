import { NextPageAuth } from '@/shared/types/auth.types'

const profilePage: NextPageAuth = () => {
	return <div>profile</div>
}

profilePage.isOnlyUser = true

export default profilePage
