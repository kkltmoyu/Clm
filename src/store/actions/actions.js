import * as types from '../types';

export const updateUserCity = (userInfo) => ({ type: types.UPDATEUSERCITY,payment :userInfo.city })
export const updateUserAddress = (userInfo) => ({ type: types.UPDATEUSERADDRESS,payment :userInfo.address })