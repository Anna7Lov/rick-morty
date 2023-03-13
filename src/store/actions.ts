import { ActionType } from 'typesafe-actions';
import * as charactersActions from './characters/actions';

const allActions = {
    charactersActions,    
};

export type GlobalAppActions = ActionType<typeof allActions>
