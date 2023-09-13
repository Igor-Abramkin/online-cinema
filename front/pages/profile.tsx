import Profile from '@/components/screens/profile/Profile'

import { NextPageAuth } from '@/shared/types/auth.types'

const profilePage: NextPageAuth = () => {
	return <Profile />
}

profilePage.isOnlyUser = true

export default profilePage
