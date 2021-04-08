import {useState} from 'react';
import {clearUserData} from '../../utils/utils';


import ActionTypes from '../types';

const initialState = {
  userData: {},
  themeColor:""
  
  

};
export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    
    case ActionTypes.OTP_VERIFY: {
      const userData = action.payload;
     
      return {...state, userData};
    }

    case ActionTypes.ON_LOGOUT: {
      
      clearUserData();
      
      return {...state, userData:{}};
    }
    case ActionTypes.CHANGE_THEME_COLOR:{
      const themeColorId = action.payload
      
      return{...state , themeColor:themeColorId}
    }

    
    
   
    default: {
      return {...state};
    }
  }
}
