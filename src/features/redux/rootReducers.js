import { combineReducers } from '@reduxjs/toolkit';
import userSlice from '../redux/allUserDataSclice'
import roleAndPrivelagesSlice from './roleAndPrivelagesSlice';
import showUserNameSclice from './showUserNameSclice';

const reducers = combineReducers({
    userSlice:userSlice,
    roleAndPrivelagesSlice:roleAndPrivelagesSlice,
    showUserNameSlice:showUserNameSclice
});

export default reducers;