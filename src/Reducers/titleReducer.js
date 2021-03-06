import {
  FETCH_TITLES,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  VOTE,
} from "../actions/actionTypes";

/** Returns state in the form of
 * {postId: {id, title, description},
 *  anotherPostId: {id, title, description}
 * }
 *
 * you get from the backend when you get basic data on all posts
 * titles are used for Home route (TO fetch data that are only needed for this page)
 */

function titleReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_TITLES:
      let newState = {};
      for (let title of action.titles) {
        newState[title.id] = title;
      }
      return newState;

    case ADD_POST:
      return {
        ...state,
        [action.post.id]: action.post,
      };

    case EDIT_POST:
      return {
        ...state,
        [action.post.id]: action.post,
      };

    case DELETE_POST:
      let stateCopy = { ...state };
      delete stateCopy[action.postId];
      return stateCopy;

    case VOTE:
      return {
        ...state,
        [action.postId]: { ...state[action.postId], votes: action.votes },
      };

    default:
      return state;
  }
}

export default titleReducer;
