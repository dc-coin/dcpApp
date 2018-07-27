import {
  MUSIC_SEARCH_POST,
  MUSIC_SEARCH_POST_SUCCESS,
  MUSIC_SEARCH_POST_FAILURE
} from './ActionTypes';

import axios from 'axios';

/* MUSIC SEARCH POST */
/*
    Parameter:
        - isInitial: whether it is for initial loading
        - listType:  OPTIONAL; loading 'old' memo or 'new' memo
        - id:        OPTIONAL; memo id (one at the bottom or one at the top)
        - username:  OPTIONAL; find memos of following user
*/
export function musicSearchRequest(searchOption) {
  return (dispatch) => {
    // inform memo list API is starting
    dispatch(musicSearch());

    /* url setup depending on parameters,
       to  be implemented.. */

    console.log(searchOption);

    var httpOption = {
      url : 'http://stisland.co.kr:3300/api/music/search',
      method : 'post',
      data: {
        queryParam:{
          filter001 : searchOption.filter001,
          filter002 : searchOption.filter002,
          filter004 : searchOption.filter004,
          filter008 : searchOption.filter008,
          filter016 : searchOption.filter016,
          filter256 : searchOption.filter256,
          keyword: searchOption.keyword,
          itemPerPage: 24,
          page : 1	
        }
      }
    }

    console.log(httpOption);

    return axios.request(httpOption)
      .then((response) => {
        dispatch(musicSearchSuccess(response.data, searchOption));
      }).catch((error) => {
        dispatch(musicSearchFailure());
      });
  };
}

export function musicSearch() {
  return {
    type: MUSIC_SEARCH_POST
  };
}

export function musicSearchSuccess(data, searchOption) {
  return {
    type: MUSIC_SEARCH_POST_SUCCESS,
    data,
    searchOption
  };
}

export function musicSearchFailure() {
  return {
    type: MUSIC_SEARCH_POST_FAILURE
  };
}