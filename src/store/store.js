
import { configureStore } from '@reduxjs/toolkit';
import { articlesSlices } from './reducers/articles/articles';

export default configureStore({
    reducer: {
        articles: articlesSlices.reducer
    },
    // A non-serializable value was detected in an action, in the path: `payload.headers`. Value: 
    // This bug fixed 
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
});