import React from 'react'

export default function Response({ response }) {
    return <div>
        {
            response ? <div><p>Correcto</p></div> : <div><p>Incorrecto</p></div>
        }
    </div>;
}
