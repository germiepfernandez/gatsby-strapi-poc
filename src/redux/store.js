import { configureStore } from '@reduxjs/toolkit';

//slice
import homeContentReducers from './reducers/home.reducers';

const rootReducer = {
    homeContents: homeContentReducers,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
