import React from 'react';
import HeaderBar from "./components/HeaderBar.jsx"
import SideBar from './components/SideBar.jsx'

import styles from './App.css'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <HeaderBar/>
                <div className={styles.bottom}>
                    <div className={styles.left}  >
                        <SideBar/>
                    </div>
                    <div className={styles.right}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

