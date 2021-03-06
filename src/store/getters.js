import * as types from './types';

export default {
  [types.SEARCH_LISTS]: state => {
    return state.searchLists;
  },
  [types.LOCATION_BELOW]: state => {
    return state.locationBelow;
  },
  [types.CURRENT_COMPONENT]: state => {
    return state.currentComponent;
  },
  [types.CHOSEN_LOCATION]: state => {
    return state.chosenLocation;
  },
  [types.FAVORITES]: state => {
    return state.favorites;
  },
  [types.GET_CHOSEN_SEARCH_LIST]: state=>{
    return state.chosenSearchList;
  }
}
