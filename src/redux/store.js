import { configureStore} from '@reduxjs/toolkit';

// import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { myFeedbackApi } from './feedbackSlice';


export const store = configureStore({
  reducer: {
    [myFeedbackApi.reducerPath]: myFeedbackApi.reducer,
  },
    middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    myFeedbackApi.middleware,
  ],
});

// setupListeners(store.dispatch);

