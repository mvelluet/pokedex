import { POKEDEX } from '../constants';

const model = () => ({
  tab: POKEDEX
});

const CHANGE_TAB = '@APP/CHANGE_TAB';
// ---------------------------------------------------------------ActionCreator
export const changeTab = (tab) => ({
  type: CHANGE_TAB,
  payload: { tab }
});

//----------------------------------------------------------------------Reducer
export default (state = model(), action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return { ...state, tab: action.payload.tab };
    default:
      return state;
  }
};
