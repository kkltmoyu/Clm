import { UPDATEUSERCITY,UPDATEUSERADDRESS } from '../types';

// 原始默认state
const defaultState = {
  locationCity:{},
  currentDetailAddress:{}
}

const updateUserInfo = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATEUSERCITY:
      return { ...state, locationCity: action.payment };
    case UPDATEUSERADDRESS:
      return { ...state, currentDetailAddress: action.payment };
    default:
      return state;
  }
}

export default updateUserInfo