import { reducer as toasterReducer } from 'react-redux-toastr'

import { reducer as UserReducer } from './user/user.slice'

export const reducers = {
	user: UserReducer,
	toastr: toasterReducer,
}
