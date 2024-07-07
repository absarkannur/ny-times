import axios from 'axios'
import api from './../config';

import { getArticles } from './../store/reducers/articles/articles';

export function fn_clearCache() {
    return dispatch => {
        dispatch( getArticles([]) );
    }
}

export function fn_getArticles() {
    return dispatch => {

        axios({
            url: api,
            method: 'GET',
            responseType: 'json',
        })
        .then(( response ) => {
            dispatch( getArticles( response ) );
        })
        .catch(( err ) => {
            dispatch( getArticles( err ) );
        });

    }

}