import { COUNTER_INCREMENT, COUNTER_DECREMENT } from './actions';

const initialState = {
  counterState: 0,
};
// Implement the reducer that updates the store based on the received action.
// Never mutate the state, always create a new state object.
// Use Object.assign or the spread operator: { ...state, ...newState }

export default function todoApp(state = initialState, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      // return new copy of state with coounter incremented
    case ...
    default:
      return state;
  }
}
