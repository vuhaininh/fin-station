import * as constants from '../constants/constants';

export default function (state = {unload:true, message: constants.MESSAGE_LOADING}, action){
  switch (action.type) {
    case constants.FETCH_TRAINS:
      return {unload: false, data: action.payload};
    case constants.ERROR_GENERAL:
      return {unload:true, message: constants.ERROR_GENERAL_MESSAGE};
    default:
      return state;
  }
  return state;
}
