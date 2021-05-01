/**
 *
 * @author Vanderson de moura Vauruk
 * 11/04/2021
 */

import { combineReducers } from '@reduxjs/toolkit';
import loginForm from '../login';
import registerForm from '../register';

const rootReducer = combineReducers({
    loginForm,
    registerForm,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
