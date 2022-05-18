import { createSlice } from '@reduxjs/toolkit';
import { mergeObjects, isObject } from '../../utils/Helpers';

const initialState = {
    navActive: 'home',
    banner: {},
};

const homeContents = createSlice({
    name: 'homeContents',
    initialState,
    reducers: {
        updateListHome(state, action) {
            const { payload } = action;
            if (payload) {
                Object.keys(payload).forEach((key) => {
                    const value = payload[key];
                    if (isObject(value)) state[key] = mergeObjects(state[key], value);
                    else state[key] = value;
                });
            }
        },
        resetStateHome(state) {
            Object.keys(initialState).forEach((key) => {
                state[key] = initialState[key];
            });
        },
    },
});

export const homeContentActions = homeContents.actions;
export default homeContents.reducer;
