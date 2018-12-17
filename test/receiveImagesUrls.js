import receiveImagesUrls from '../src/receiveImagesUrls';

it('should build an action with the given URLs', () => {
  const urls = {
    'avatar-402f638b-414a-462a-9fc8-5bab04972a81-400x400': {
      url: 'https://example.com/avatar-402f638b-414a-462a-9fc8-5bab04972a81-400x400.png',
      expiryDate: 1545073398987,
    },
    'background-12912def-dd1b-467e-bbc1-605f624f438e-1080x1080': {
      url: 'https://example.com/background-12912def-dd1b-467e-bbc1-605f624f438e-1080x1080.png',
      expiryDate: 1545073399987,
    },
  };
  const expected = {
    type: 'RECEIVE_IMAGES_URLS',
    payload: {
      'avatar-402f638b-414a-462a-9fc8-5bab04972a81-400x400': {
        url: 'https://example.com/avatar-402f638b-414a-462a-9fc8-5bab04972a81-400x400.png',
        expiryDate: 1545073398987,
      },
      'background-12912def-dd1b-467e-bbc1-605f624f438e-1080x1080': {
        url: 'https://example.com/background-12912def-dd1b-467e-bbc1-605f624f438e-1080x1080.png',
        expiryDate: 1545073399987,
      },
    },
  };
  const actual = receiveImagesUrls(urls);
  expect(actual).toEqual(expected);
});
