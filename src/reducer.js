import { RECEIVE_IMAGES_URLS } from './receiveImagesUrls';

export default (state, action) => {
  if (action && action.type === RECEIVE_IMAGES_URLS) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return state;
};
