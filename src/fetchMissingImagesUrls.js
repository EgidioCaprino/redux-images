export default async (keys, imagesUrls, fetchImagesUrls, timeToLive) => {
  const missingKeys = keys.filter((key) => {
    const image = imagesUrls[key];
    return !image || Date.now() >= image.expiryDate;
  });

  const rawUrls = await fetchImagesUrls(missingKeys);

  const urls = rawUrls.reduce(
    (accumulator, url, index) => ({
      ...accumulator,
      [missingKeys[index]]: {
        url,
        expiryDate: Date.now() + timeToLive,
      },
    }),
    {},
  );

  return urls;
};
