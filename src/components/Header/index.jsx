import React from 'react'

// Styles
import Styles from './header.module.css';

export default function Header() {
    return (
        <div className={ Styles.header_section }>
            <h1 className={ Styles.site_header + ` ${'baskervville-sc'}` }>NY TIMES</h1>
        </div>
    )
}