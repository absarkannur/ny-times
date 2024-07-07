
import { createSlice } from '@reduxjs/toolkit'

export const articlesSlices = createSlice({
	name: 'Articles',
	initialState: {
        articles_list: []
	},
	reducers: {
		getArticles: ( state, action ) => {
			// console.log(action);
            state.articles_list = action.payload;
		}
	}
});

export const { getArticles } = articlesSlices.actions
export default articlesSlices.reducer