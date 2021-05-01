import { configureStore, Middleware } from '@reduxjs/toolkit';
import { createSelectorHook, useDispatch } from 'react-redux';
//import createDebugger from 'redux-flipper';
import rootReducer, { RootState } from './reducers';
// ...

const middleware: Middleware[] = [];

if (__DEV__) {
    //&& !process.env.JEST_WORKER_ID
    // middleware.push(createDebugger());
}

const rootStore = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(middleware),
    devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof rootStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector = createSelectorHook<RootState>();

export default rootStore;
