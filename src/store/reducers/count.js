// import { combineReducers } from 'redux';
import { INCREASE, DECREASE, RESET} from '../types';

// 原始默认state
const defaultState = {
  count: 5,
  factor: 1
}

const counter = (state = defaultState, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + action.amount };
    case DECREASE:
      return { ...state, count: state.count - action.amount };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
}

export default counter