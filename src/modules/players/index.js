import {
  PLAYER_ADD_REQUESTED, PLAYER_DELETE_CLOSED, PLAYER_DELETE_REQUESTED,
  PLAYER_EDIT_CLOSED, PLAYER_EDIT_REQUESTED, RECEIVE_PLAYERS
} from "../types";

const initialState = {
  isEditingPlayer: false,
  isDeletingPlayer: false,
  isLoaded: false,
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_ADD_REQUESTED:
    case PLAYER_EDIT_REQUESTED:
      return {
        ...state,
        isEditingPlayer: true
      };
    case PLAYER_EDIT_CLOSED:
      return {
        ...state,
        isEditingPlayer: false
      };
    case RECEIVE_PLAYERS:
      return {
        ...state,
        isLoaded: true,
        items: action.value
      };
    case PLAYER_DELETE_REQUESTED:
      return {
        ...state,
        isDeletingPlayer: true
      };
    case PLAYER_DELETE_CLOSED:
      return {
        ...state,
        isDeletingPlayer: false
      };

    default:
      return state;
  }
}
