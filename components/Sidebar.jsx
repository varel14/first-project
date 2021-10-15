import React from 'react'
import { Archive, CheckCircle, ChevronRight, Paperclip, PieChart, Plus } from 'react-feather'
import * as styles from './../styles/Sidebar.module.css'

const SubLink = ({text, icon, children}) => {
    return <button className={styles.sidebar__link}>
        <div className={styles.heading}>
            <div>
                {icon} <p>{text}</p>
            </div>
            <ChevronRight/>
        </div>
        <div className={styles.list__of__projects}>
            {children}
        </div>
    </button>
}

const Sidebar = () => {

    return <div className={styles.sidebar}>
        <div className={styles.sidebar__header}>
            <h2>Projects</h2>
            <button className={styles.action__button}>
                <Plus size="22" color="#fff"/>
            </button>
        </div>
        <div className={styles.list__of__items}>
            <SubLink icon={<Archive size="21"/>} text="All projects"/>
            <SubLink icon={<Paperclip size="21"/>} text="Pinned"/>
            <SubLink icon={<PieChart size="21"/>} text="In process">
                <a href="">Lingvo app</a>
                <a href="">Lifesum</a>
                <a href="">Deathly app</a>
            </SubLink>
            <SubLink icon={<CheckCircle size="21"/>} text="Done"/>
        </div>
    </div>

}

export default Sidebar