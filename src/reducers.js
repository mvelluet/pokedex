import { combineReducers } from 'redux';
import app from './ducks/app';
import favoris from './ducks/favoris';

export default combineReducers({
  app,
  favoris,
});
