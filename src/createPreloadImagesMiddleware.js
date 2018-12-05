import { RECEIVE_IMAGES_URLS } from './receiveImagesUrls';

export default preloadImages => () => next => action => {
  if (action && action.type === RECEIVE_IMAGES_URLS) {
    const urls = Object.values(action.payload).map(({ url }) => url);
    preloadImages(urls);
  };

  return next(action);
};
