import { createAction } from '@reduxjs/toolkit';

export const setLoading = createAction('loading/setLoading');
export const clearLoading = createAction('loading/clearLoading');