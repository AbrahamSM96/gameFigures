import React from 'react'
import styles from '../styles/pages/Home.module.css'
import {useHistory} from 'react-router-dom'
export default function Home() {
  let history = useHistory();

    const onClick = () => {
    history.push("/game");
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen ">
            <div className="justify-center my-12">
                <h1 className="text-purple-800 text-5xl">
                    Título de la aplicación
                </h1>
            </div>
            <div className="justify-center">
                <button
                    className="bg-purple-200 rounded-2xl p-4"
                    onClick={onClick}
                >
                    Iniciar
                </button>
            </div>
        </div>
    );
}
