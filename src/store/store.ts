import { configureStore } from '@reduxjs/toolkit';
import coffeeSlice from './slice/coffeeSlice';
import pokemonSlice from './slice/pokemonSlice';
// import reduxLogger from 'redux-logger';

const store = configureStore({
  reducer: {
    pokemon: pokemonSlice,
    coffee: coffeeSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger),
});
// RootState要記得下export來提供slices使用
export type RootState = ReturnType<typeof store.getState>;

export default store;
