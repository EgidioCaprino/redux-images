# redux-images

Redux components for fetching and preloading images.

Associate the reducer with the `imagesUrls` entry in your store.

```js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer, createPreloadImagesMiddleware } from 'redux-images';

const rootReducer = combineReducers({
  imagesUrls: reducer,
});

const preloadImagesMiddleware = createPreloadImagesMiddleware((urls) => {
  // Preload images here, for instance, in React Native you may want to do
  // urls.forEach(Image.prefetch)
})

const store = createStore(rootReducer, applyMiddleware(preloadImagesMiddleware));
```

Create the action for fetching images URLs.

```js
// fetchImagesUrls.js
import { createFetchImagesUrlsAction } from 'redux-images';

const timeToLive = 900000; // In millis, optional, default to 15 minutes

export default createFetchImagesUrlsAction(
  async (keys) => {
    // For the given keys, fetch images URLs from your backend system
    // Return an array of strings, in the same order as for the given keys
  },
  timeToLive,
);
```

Now in your code you can dispatch this action for fetching images URLs and preloading images.

```js
import fetchImagesUrls from './fetchImagesUrls';

const keys = [
  'avatar-f7e98644-42f3-4439-b881-bc70a98019ed-200x200',
  'post-cover-6900f761-ecb1-4892-b926-1336c836e1fb-400x400',
];

dispatch(fetchImagesUrls(keys));
```

Link the images with your React component.

```js
import { connect } from 'react-redux';

const Post = ({ avatar, cover, ...post }) => (
  <div>
    <h1>{post.title}</h1>
    <p>By {post.author}</p>
    <img src={avatar} />

    <img src={cover} />
    <div>{post.body}</div>
  </div>
);

const mapStateToProps = ({ imagesUrls }) => ({
  avatar: imagesUrls['avatar-f7e98644-42f3-4439-b881-bc70a98019ed-200x200'].url,
  cover: imagesUrls['post-cover-6900f761-ecb1-4892-b926-1336c836e1fb-400x400'].url,
});

export default connect(mapStateToProps)(Post);
```
