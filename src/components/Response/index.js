import React, { useEffect } from 'react'

export default function Response({ response }) {
 
    return (
        <div>
            {response === true && (
                <div className="flex justify-center items-center h-screen bg-green-400">
                    <h1 className="text-white text-6xl">Correcto</h1>
                </div>
            )}
            {response === false && (
                <div className="flex justify-center items-center h-screen bg-red-400">
                    <h1 className="text-white text-6xl">Incorrecto</h1>
                </div>
            )}
        </div>
    );
}
