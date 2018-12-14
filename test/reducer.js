import reducer from '../src/reducer';

it('should store images URLs', () => {
  const state = undefined;
  const action = {
    type: 'RECEIVE_IMAGES_URLS',
    payload: {
      'avatar-402f638b-414a-462a-9fc8-5bab04972a81-400x400': {
        expiryDate: 9660340663410438,
        url: 'https://example.com/avatar-402f638b-414a-462a-9fc8-5bab04972a81-400x400/v1.png',
      },
    },
  };
  const expected = {
    'avatar-402f638b-414a-462a-9fc8-5bab04972a81-400x400': {
      expiryDate: 9660340663410438,
      url: 'https://example.com/avatar-402f638b-414a-462a-9fc8-5bab04972a81-400x400/v1.png',
    },
  };
  const actual = reducer(state, action);
  expect(actual).toEqual(expected);
});

it('should preserve existing images URLs', () => {
  const state = {
    'avatar-402f638b-414a-462a-9fc8-5bab04972a81-400x400': {
      expiryDate: 9660340663410438,
      url: 'https://example.com/avatar-402f638b-414a-462a-9fc8-5bab04972a81-400x400/v1.png',
    },
  };
  const action = {
    type: 'RECEIVE_IMAGES_URLS',
    payload: {
      'background-12912def-dd1b-467e-bbc1-605f624f438e-1080x1080': {
        expiryDate: 9660340663410438,
        url: 'https://example.com/background-12912def-dd1b-467e-bbc1-605f624f438e-1080x1080/v1.png',
      },
    },
  };
  const expected = {
    'avatar-402f638b-414a-462a-9fc8-5bab04972a81-400x400': {
      expiryDate: 9660340663410438,
      url: 'https://example.com/avatar-402f638b-414a-462a-9fc8-5bab04972a81-400x400/v1.png',
    },
    'background-12912def-dd1b-467e-bbc1-605f624f438e-1080x1080': {
      expiryDate: 9660340663410438,
      url: 'https://example.com/background-12912def-dd1b-467e-bbc1-605f624f438e-1080x1080/v1.png',
    },
  };
  const actual = reducer(state, action);
  expect(actual).toEqual(expected);
});

it('should override images URLs by key', () => {
  const state = {
    'avatar-402f638b-414a-462a-9fc8-5bab04972a81-400x400': {
      expiryDate: 9660340663410438,
      url: 'https://example.com/avatar-402f638b-414a-462a-9fc8-5bab04972a81-400x400/v1.png',
    },
    'background-12912def-dd1b-467e-bbc1-605f624f438e-1080x1080': {
      expiryDate: 9660340663410438,
      url: 'https://example.com/background-12912def-dd1b-467e-bbc1-605f624f438e-1080x1080/v1.png',
    },
  };
  const action = {
    type: 'RECEIVE_IMAGES_URLS',
    payload: {
      'avatar-402f638b-414a-462a-9fc8-5bab04972a81-400x400': {
        expiryDate: 9660340663410438,
        url: 'https://example.com/avatar-402f638b-414a-462a-9fc8-5bab04972a81-400x400/v2.png',
      },
    },
  };
  const expected = {
    'avatar-402f638b-414a-462a-9fc8-5bab04972a81-400x400': {
      expiryDate: 9660340663410438,
      url: 'https://example.com/avatar-402f638b-414a-462a-9fc8-5bab04972a81-400x400/v2.png',
    },
    'background-12912def-dd1b-467e-bbc1-605f624f438e-1080x1080': {
      expiryDate: 9660340663410438,
      url: 'https://example.com/background-12912def-dd1b-467e-bbc1-605f624f438e-1080x1080/v1.png',
    },
  };
  const actual = reducer(state, action);
  expect(actual).toEqual(expected);
});
