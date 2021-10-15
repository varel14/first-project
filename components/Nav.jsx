import Image from 'next/image'
import { BookOpen, Clock, Folder, Home, LogOut, Settings } from 'react-feather'
import * as styles from '../styles/Nav.module.css'
function Nav () {
    return (
        <div className={styles.navigation}> 
            <span className={styles.navigation__logo}>T</span>
                <a href='#'><Home color="var(--nav-icon-color)"/></a>
                <a href='#'><Folder color="var(--nav-icon-color)"/></a>
                <a href='#'><Clock color="var(--nav-icon-color)"/></a>
                <a href='#'><BookOpen color="var(--nav-icon-color)"/></a> 
                <a href='#'><Settings color="var(--nav-icon-color)"/></a>
                <a href='#'><LogOut color="var(--nav-icon-color)"/></a>
        </div>
    )
}

export default Nav