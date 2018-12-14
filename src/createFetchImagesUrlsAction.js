import fetchMissingImagesUrls from './fetchMissingImagesUrls';
import receiveImagesUrls from './receiveImagesUrls';

const defaultOptions = {
  timeToLive: 900000,
  debounceTime: 100,
};

export default (fetchImagesUrls, options = defaultOptions) => {
  let keysToFetch = [];
  let timeout = null;

  return keys => (dispatch, getState) => {
    keysToFetch = [...keysToFetch, ...keys];

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(
      async () => {
        const { imagesUrls } = getState();
        const urls = await fetchMissingImagesUrls(
          keysToFetch, 
          imagesUrls, 
          fetchImagesUrls, 
          options.timeToLive,
        );
        dispatch(receiveImagesUrls(urls));
      },
      options.debounceTime,
    );
  };
};
