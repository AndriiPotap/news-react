// import React from 'react'

import { formatDate } from "../../helper/formatDate"
import styles from './styles.module.css'

const  Header = () => {
  return (
    <header className={styles.header}> 
        <h1 className={styles.title}>News Reactify</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
    </header>
  )
}

export default Header