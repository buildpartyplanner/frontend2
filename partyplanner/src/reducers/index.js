import { combineReducers } from 'redux';
import { reducer } from './todo/index';
import { shoppingreducer } from './shopping/index';
import { partyreducer} from './party/index'
import {entertainmentreducer} from './entertainment/index'

export default combineReducers({
    reducer,
    shoppingreducer,partyreducer,entertainmentreducer
  });
  