import React from 'react'
import Styles from './wrapper.module.css';

export default function Wrapper(props) {
    return (
        <div className={ Styles.wrapper }>{ props.children }</div>
    )
}
