import { render as rtlRender, screen, waitFor } from '@testing-library/react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './../store/store'

// Components
import ArticlesPage from './articles';

const render = component => rtlRender(
    <ReduxProvider store={store}>
        <BrowserRouter>
            { component }
        </BrowserRouter>
    </ReduxProvider>
)

describe( 'Articles Page', () => {

    it( "Should show the articles", async () => {

        render( <ArticlesPage /> );

        await waitFor( async () => {
            const element = await screen.getByTestId('article-list');
            expect(element).not.toBeEmptyDOMElement()
        },{ timeout: 3000 });

    });

});
