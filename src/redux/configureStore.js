import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import cityReducer from './cities';
import weatherReducer from './weather';

const rootReducer = combineReducers({
  weatherData: weatherReducer,
  cityData: cityReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
