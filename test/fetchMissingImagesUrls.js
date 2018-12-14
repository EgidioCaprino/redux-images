import fetchMissingImagesUrls from '../src/fetchMissingImagesUrls';

it('should fetch images URLs that are not in the store already', async () => {
  const keys = ['avatar-402f638b-414a-462a-9fc8-5bab04972a81-400x400'];
  const imagesUrls = {};
  const fetchImagesUrls = jest.fn();
  const timeToLive = 900000;
  
  const expected = ['avatar-402f638b-414a-462a-9fc8-5bab04972a81-400x400'];
  fetchMissingImagesUrls(
    keys,
    imagesUrls,
    fetchImagesUrls,
    timeToLive,
  );

  expect(fetchImagesUrls).toHaveBeenCalledWith(expected);
});
