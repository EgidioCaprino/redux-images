import { RECEIVE_IMAGES_URLS } from './receiveImagesUrls';

const initialState = {};

export default (state = initialState, action) => {
  if (action && action.type === RECEIVE_IMAGES_URLS) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return state;
};
