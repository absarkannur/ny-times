import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux'

import store from './store/store'

// Global Styles
import './global.css'

import ArticlesPage from './articles/articles'
import ArticleDetails from './articles/articles.details/article.details';

const router = createBrowserRouter([
    {
        path: '/',
        element: <ArticlesPage />,
    },{
        path: '/:id',
        element: <ArticleDetails />
    },{
        path: '*',
        element: <div className="error-page"><span>404 Error</span></div>
    }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
)
