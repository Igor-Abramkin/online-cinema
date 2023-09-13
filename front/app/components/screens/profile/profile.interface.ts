import { IUser } from '@/shared/types/user.types'

export interface IProfileUnput extends Pick<IUser, 'email' | 'password'> {}
