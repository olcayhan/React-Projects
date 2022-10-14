import React from 'react'
import imp from "../images/imp.png"

export default function StartImport() {
    return (
        <div className='startimp'>
            <img src={imp} />
            <h4>Starring To Do's</h4>
            <p>Try starring some tasks to see them here</p>
        </div>
    )
}
