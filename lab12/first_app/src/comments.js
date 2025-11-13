import React from "react"
import "./App.css"

const User = function(props) {
    return (
        <section className="user-card">
            <div className="avatar-container">
                <img src={props.image} alt={`${props.name} avatar`} />
            </div>
            
            <div className="content">
                <span className="author">{props.name}</span>
            </div>

            <div className="metadata">
                <p>Posted On <span className="date">{props.date}</span></p>
            </div>
            
            <div className="comment">
                <p><i>{props.comment}</i></p>
            </div>
        </section>
    )
}

export default User;