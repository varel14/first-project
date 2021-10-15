import React from 'react'
import { Paperclip, Plus, UserPlus } from 'react-feather'
import * as styles from '../styles/Main.module.css'

const Toolbar = ({users}) => {

    return <div className={styles.toolbar}>
        <div>
            <div className={styles.users}>
                {users.map((user, index) => <img style={{position: "relative", left: ((index * -10) + "px")}} src={user} alt="Profile phot"/>
                
                )}
                <span style={{position: "relative", left: ((users.length * -10) + "px")}} className={styles.restant__user}>3</span>
            </div>
            <button><UserPlus size="20"/> Invite people</button>
        </div>
        <div className={styles.indicators}>
            <div className={styles.indicator__item}>
                <span style={{background: "green"}}></span> Important
            </div>
            <div className={styles.indicator__item}>
                <span style={{background: "orange"}}></span> Irrelevant
            </div>
            <div className={styles.indicator__item}>
                <span style={{background: "gray"}}></span> default
            </div>
        </div>
    </div>

}

const Column = ({title, counter, children}) => {
    return <div className={styles.column__item}>
        <div className={styles.column__header}>
            <h3 className={styles.title}>{title} ({counter})</h3>
            <button><Plus/> New task</button>
        </div>
        {children}
    </div>
}

const ProjectItem = ({title, description = false, color, documents__joigned, users, progress = "100"}) => {
    return <div className={styles.project__item}>
        <div className={styles.header}>
            <div>
                <span style={{background: color, width: "10px", height: "10px", borderRadius: "50%"}}></span>
                <p>{title}</p>
            </div>
            <div>
                <Paperclip size="18"/>
                {documents__joigned}
            </div>
        </div>
        <p className={styles.description}>
            {description || "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis provident assumenda laboriosam, mollitia fugiat soluta!..."}
        </p>

        <div className={styles.progress__bar} style={{height: "2px", background: "#ccc", width: "100%", borderRadius: "6px"}}>
            <div className={styles.bar} style={{width: progress + "%", background: color, height: "100%", borderRadius: "6px"}}></div>
        </div>
        <div className={styles.users}>
            {users.map((user, index) => <img style={{position: "relative", left: ((index * -7) + "px"), width: "30px", height: "30px", borderRadius: "50%", objectFit: "cover"}} src={user} alt="Profile phot"/>)}
        </div>
    </div>
}

const Main = () => {

    return (<div className={styles.main}>
        <Toolbar users={["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"]}/>
        <div className={styles.columns}>
            <Column title="To do" counter="24">
                <ProjectItem progress="48" title="Design" color="orange" documents__joigned="1" users={["/images/1.jpg", "/images/10.jpg", "/images/17.jpg", "/images/22.jpg"]}/>
                <ProjectItem progress="34" title="Illustration" color="green" documents__joigned="4" users={["/images/14.jpg", "/images/25.jpg"]}/>
                <ProjectItem progress="42" title="Design" color="gray" documents__joigned="6" users={["/images/5.jpg", "/images/6.jpg", "/images/17.jpg", "/images/20.jpg"]}/>
            </Column>
            <Column title="In progress" counter="12">
                <ProjectItem progress="78" title="Website" color="gray" documents__joigned="3" users={["/images/19.jpg", "/images/18.jpg"]}/>
                <ProjectItem progress="94" title="design" color="green" documents__joigned="4" users={["/images/3.jpg", "/images/15.jpg", "/images/17.jpg"]}/>
                <ProjectItem progress="82" title="Website" color="green" documents__joigned="3" users={["/images/1.jpg", "/images/10.jpg", "/images/17.jpg", "/images/22.jpg"]}/>
            </Column>
            <Column title="Done" counter="3">
                <ProjectItem title="Moodboard" color="orange" documents__joigned="1" users={["/images/18.jpg", "/images/27.jpg"]}/>
                <ProjectItem title="Wireframes" color="gray" documents__joigned="3" users={["/images/10.jpg", "/images/14.jpg"]}/>
                <ProjectItem title="Brand" color="green" documents__joigned="0" users={["/images/12.jpg", "/images/10.jpg", "/images/27.jpg", "/images/29.jpg"]}/>
            </Column>
        </div>
    </div>
    )
}

export default Main