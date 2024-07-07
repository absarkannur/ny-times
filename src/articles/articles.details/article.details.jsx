import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {withRouter} from './../../functions/route-wrap';

// Components
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';

// Styles
import Styles from './../article.module.css';

// Actions
import { fn_getArticles } from './../article.actions';


class ArticleDetails extends Component {

    constructor( props ){

        super( props )

        this.state = {
            articles_data: []
        }

    }

    componentDidMount(){

        const articleId = this.props.params.id;


        if( this.props.articles.length !== 0 ) {

            const tempData = this.props.articles.data.results;
            let currentArticle = tempData.find( (obj) => obj.id == articleId );

            this.setState({
                articles_data: currentArticle
            })

            // console.log( currentArticle );

        }
        
    }

    render() {

        const data = this.state.articles_data;
        
        return (

            <Wrapper>
            
                <Link to={'/'}>
                    <Header />
                </Link>

                <div className={Styles.breadcrumbs}>
                    <ul className={ Styles.breadcrumbs_list }>
                        <li className={ Styles.item }><Link to={'/'}>Home &gt;</Link></li>
                        <li className={ Styles.item }>{ data.title }</li>
                    </ul>
                </div>

                {
                    ( data.length !== 0 ) ? <div className={ Styles.articles }>
                        <h1 className="baskervville-sc">{ data.title }</h1>
                        <div className={ Styles.box }>
                            <img src={data.media[0]["media-metadata"][2].url} />
                            <p>{ data.abstract }</p>
                            <em>{ data.byline }</em>
                            <br/>
                            <a href={ data.url }>Read More</a>
                        </div>
                    </div> : ''
                }

                

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
    fn_getArticles
    // ...
})(  withRouter( ArticleDetails ) );