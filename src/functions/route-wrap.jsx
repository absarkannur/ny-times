// :)
import { useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';

export const withRouter = ( Component ) => {

    const Wrapper = ( props ) => {

        let [searchParams, setSearchParams] = useSearchParams();

        const navigate  = useNavigate();
        const location  = useLocation();
        const params    = useParams();

        const handleSubmit = ( res ) => {
            
            let searchText = '';

            if( typeof res.search !== 'undefined' || 
                    res.search !== 'null' || 
                    res.search !== '' ) {
                searchText = res.search;

            }

            searchParams.set( 'search', searchText );
            searchParams.set( 'page', res.page );
            setSearchParams( searchParams );

        }

        return (
            <Component
                navigate={ navigate }
                location={ location }
                search={ searchParams }
                params={ params }
                handleSearchParams={ handleSubmit }
                { ...props }
            />
        );
        
    };

    return Wrapper;
    
};