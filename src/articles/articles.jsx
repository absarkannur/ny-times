import React, { Component } from 'react'
import { connect } from 'react-redux';
import {withRouter} from './../functions/route-wrap';

// Actions
import { fn_clearCache, fn_getArticles } from './article.actions';

// Components
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import News from '../components/News';

// Styles
import Styles from './article.module.css';

class ArticlesPage extends Component {

    constructor( props ) {
        super( props );

        this.state = {
            articles_data: []
        }

    }

    componentDidMount() {
        // Initial Load
        this.props.fn_getArticles();

        console.log( this.props )

    }

    componentDidUpdate( prevProps ) {
        if( prevProps !== this.props ) {

            if( this.props.articles.code === "ERR_NETWORK" ) {
                this.setState({
                    articles_data: []
                })
            } else {

                if( this.props.articles.data.length !== 0 ) {
                    
                    if( this.props.articles.status == 200 ||
                        this.props.articles.data.status == "OK"
                     ) {
                        this.setState({
                            articles_data: this.props.articles.data.results
                        })
                    }
                }

            }

        }

    }

    render() {
        return (
            <Wrapper>
                
                <Header /> 
               
                <div className={ Styles.articles } data-test-id={'article-list'}>
                    {
                        ( this.state.articles_data.length !== 0 ) ? <News onData={ this.state.articles_data } /> : ''
                    }
                </div>
            
            </Wrapper>
        )
    }
}

function mapStatetoProps( state ){
    return {
        articles: state.articles.articles_list
    }
}

export default connect( mapStatetoProps, { 
    fn_clearCache,
    fn_getArticles
    // ...
})( withRouter( ArticlesPage ) );
