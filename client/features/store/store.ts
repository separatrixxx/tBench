import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import themeSlice from 'features/theme/themeSlice';
import userSlice from "features/user/userSlice";
import { createWrapper } from "next-redux-wrapper";


const makeStore = () =>
  configureStore({
    reducer: {
        theme: themeSlice,
        user: userSlice,
    },
    devTools: true,
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);