import { INCREASE, DECREASE, RESET } from '../types';

const increase = (para) => ({ type: INCREASE,amount :para.amount });
const decrease = () => ({ type: DECREASE });
const reset = () => ({ type: RESET });

export {
    increase,
    decrease,
    reset
}