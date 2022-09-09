import { configureStore } from '@reduxjs/toolkit';
import React, {Component} from 'react';
import favoritesReducer from './favorites';

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer
  }
});