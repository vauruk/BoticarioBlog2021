/**
 *
 * @author Vanderson de moura Vauruk
 * 11/04/2021
 */

import { combineReducers } from '@reduxjs/toolkit';
import loginForm from '../login';

const rootReducer = combineReducers({
  loginForm,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
