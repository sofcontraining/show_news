import React from 'react'

export default function Newsitem(props) {
    return (
        <>
            <div className="card">
                <img src={props.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href={props.url} className="btn btn-primary">Read Full News</a>
                </div>
            </div>
        </>
    )
}
