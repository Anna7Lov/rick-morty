import { User } from 'firebase/auth';
import { RequestState } from '../../services/types';
import { GlobalAppState } from '../rootReducer';

export const selectUser = (state: GlobalAppState): User | null =>
  state.user.currentUser;

export const selectIsUserLoading = (state: GlobalAppState): boolean =>
  state.user.loginUserRequestState === RequestState.Waiting;

export const selectisUserFailed = (state: GlobalAppState): string | null =>
  state.user.loginUserError;

export const selectIsUserLogoutLoading = (state: GlobalAppState): boolean =>
  state.user.logoutUserRequestState === RequestState.Waiting;

export const selectisUserLogoutFailed = (state: GlobalAppState): string | null =>
  state.user.logoutUserError;
