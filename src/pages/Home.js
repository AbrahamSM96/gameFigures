import React from 'react'
import styles from '../styles/pages/Home.module.css'
import {useHistory} from 'react-router-dom'
export default function Home() {
  let history = useHistory();

    const onClick = () => {
    history.push("/game");
    }

    return (
        <div className={styles._content}>
            <div className={styles._content_title}>
                <h1 className={(styles._h1, "text-purple-800")}>Title</h1>
            </div>
            <div className={styles._content_button}>
                <button className={styles._button} onClick={onClick}>
                    Iniciar
                </button>
            </div>
        </div>
    );
}
