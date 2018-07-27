import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
  search: {
    status: 'INIT',
    data: {}
  }
};

export default function music(state, action) {
  if (typeof state === "undefined") {
    state = initialState;
  }

  switch (action.type) {

    case types.MUSIC_SEARCH_POST:
      return update(state, {
        search: {
          status: { $set: 'WAITING' },
        }
      });
    case types.MUSIC_SEARCH_POST_SUCCESS:

      return update(state, {
        search: {
          status: { $set: 'SUCCESS' },
          data: { $set: action.data }
        }
      });

    case types.MUSIC_SEARCH_POST_FAILURE:
      return update(state, {
        search: {
          status: { $set: 'FAILURE' }
        }
      });
    default:
      return state;
  }
}