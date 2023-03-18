import { ActionType } from 'typesafe-actions';
import * as charactersActions from './characters/actions';
import * as userActions from './user/actions';

const allActions = {
    charactersActions,
    userActions
};

export type GlobalAppActions = ActionType<typeof allActions>
