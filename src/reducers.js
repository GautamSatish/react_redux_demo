import { COUNTER_INCREMENT, COUNTER_DECREMENT } from './actions';

const initialState = {
  counterState: 0,
};
// Implement the reducer that updates the store based on the received action.
// Never mutate the state, always create a new state object.
// Use Object.assign or the spread operator: { ...state, ...newState }

export default function todoApp(state = initialState, action) {
  let newValue;
  switch (action.type) {
    case COUNTER_INCREMENT:
      return { ...state, counterState: (state.counterState + action.incrValue) };
    case COUNTER_DECREMENT:
      newValue = state.counterState - 1;
      if (newValue < 0) {
        newValue = 0;
      }
      return { ...state, counterState: newValue };
    default:
      return state;
  }
}
