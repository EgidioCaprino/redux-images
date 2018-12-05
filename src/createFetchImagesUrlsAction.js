import receiveImagesUrls from './receiveImagesUrls';

export default (fetchImagesUrls, timeToLive = 900000) => {
  return keys => async (dispatch, getState) => {
    const { imagesUrls } = getState();

    const keysToFetch = keys.filter((key) => {
      const image = imagesUrls[key];
      return !image || Date.now() >= image.expiryDate;
    });

    const rawUrls = await fetchImagesUrls(keysToFetch);

    const urls = rawUrls.reduce(
      (accumulator, url, index) => ({
        ...accumulator,
        [keysToFetch[index]]: {
          url,
          expiryDate: Date.now() + timeToLive,
        },
      }),
      {},
    );

    dispatch(receiveImagesUrls(urls));
  };
};
