import { combineReducers } from 'redux';
import trains from './reducer_trains';

//Redux reducer to process state of application.
// Root reducer combines all element reducers
const rootReducer = combineReducers({
  trains: trains // Fetched Trains in the Station
});

export default rootReducer;
