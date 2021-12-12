import React from 'react';
const SET_LOADING_TRUE = 'SET-LOADING-TRUE';

let userData = {
  isLoading: true,
};

const userReducer = (state = userData, action) => {
  let stateCopy;
  switch (action.type) {
    case SET_LOADING_TRUE:
      stateCopy = {
        isLoading: action.payload,
      };
      return stateCopy;

    default:
      return state;
  }
};

export const setLoadingTrue = payload => ({type: SET_LOADING_TRUE, payload});

export default userReducer;
