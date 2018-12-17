import createPreloadImagesMiddleware from '../src/createPreloadImagesMiddleware';

it('should provide a middleware function for preloading images with the given function', () => {
  const preloadImages = jest.fn();
  const next = () => {};
  const action = {
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
  
  const expected = [
    'https://example.com/avatar-402f638b-414a-462a-9fc8-5bab04972a81-400x400.png',
    'https://example.com/background-12912def-dd1b-467e-bbc1-605f624f438e-1080x1080.png',
  ];
  createPreloadImagesMiddleware(preloadImages)()(next)(action);
  expect(preloadImages).toHaveBeenCalledWith(expected);
});

it('should continue actions chain', () => {
  const preloadImages = () => {};
  const next = jest.fn();
  const action = {
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
  
  createPreloadImagesMiddleware(preloadImages)()(next)(action);
  expect(next).toHaveBeenCalledWith(action);
});
