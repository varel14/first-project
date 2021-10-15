import React from 'react'
import { Bell, Calendar, ChevronDown, Search } from 'react-feather'
import * as styles from '../styles/Header.module.css'

const Header = () => {

    return <div className={styles.header}>
        <div className={styles.searchbar__container}>
            <Search/>
            <input type="text" placeholder="Search.."/>
        </div>
        <div className={styles.period__of__days}>
            <Calendar size="21"/>
            <p>10 May-23 June</p>
        </div>
        <div className={styles.user__data}>
            <div className={styles.notifications__container}>
                <span></span>
                <Bell size="22"/>
            </div>
            <div>
                <img src="/images/2.jpg" alt="Profile Photo"/>
            </div>
            <p className={styles.username}>John Alby</p>
            <ChevronDown/>
        </div>
    </div>

}

export default Header