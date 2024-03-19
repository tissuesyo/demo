import { createReducer } from '@reduxjs/toolkit';
import { clearLoading, setLoading } from './actions/loadingActions';

const initialState = {
  isLoading: false,
};

const loadingReducer = createReducer(initialState, {
  [setLoading]: (state) => {
    state.isLoading = true;
  },
  [clearLoading]: (state) => {
    state.isLoading = false;
  },
});

export default loadingReducer;
