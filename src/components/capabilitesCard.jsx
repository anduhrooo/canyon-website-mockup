import React from 'react'

export default function Capabilities(props) {
    console.log(props);
    return (
        <div className="card slide-in-bottom">
            <div className='card-title'>{props.title}</div>
            <div>
                <ul className='card-details'>
                    {props.list.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}
