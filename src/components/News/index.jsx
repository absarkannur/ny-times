import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './news.module.css';

export default function News( props ) {

    const tempData = props.onData;
    
    return (
        <div className={ Styles.article_list }>
            
            {
                tempData.map(( news, key ) => <div key={ key } className={ Styles.list_item } >
                    <Link to={'/' + news.id }  >
                    {
                        ( news.media.length !== 0 ) ? <img src={ news.media[0]["media-metadata"][2].url } /> : []
                    }
                    <h2 className="baskervville-sc">{news.title}</h2>
                    <p>{ news.abstract }</p>
                    <span>See More</span>
                    </Link>
                </div> )
            }

        </div>
    )
}
