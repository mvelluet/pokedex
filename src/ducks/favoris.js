import * as R from 'ramda';

const model = () => ({
});

const ADD = '@FAVORIS/ADD';
const REMOVE = '@FAVORIS/REMOVE_FAVOR';
// ---------------------------------------------------------------ActionCreator
export const addFavori = (id) => ({
  type: ADD,
  payload: { id }
});

export const removeFavori = (id) => ({
  type: REMOVE,
  payload: { id }
});

//----------------------------------------------------------------------Reducer
export default (state = model(), action) => {
  switch (action.type) {
    case ADD:
      return { ...state, [action.payload.id]: action.payload.id };
    case REMOVE:
      return R.dissoc(action.payload.id, state);
    default:
      return state;
  }
};
