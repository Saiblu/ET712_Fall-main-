import React from "react"
import avatar from "./images/avatar_autobots.png"
import "./App.css"
import User_feedback from "./User_feedback"

const User = function(props) {
    return (
        <>
            <section>
                <a><img src={props.image}/> </a>
                <div className="content">
                    <a className = "author">{props.name}</a>
                </div>

                <div className="metadata">
                    <p> Posted On <span className="date">{props.date}</span></p>
                </div>
                <div className="comment">
                    <p><i>{props.comment}</i></p>
                </div>
            </section>
        </>
    )
}
export default User;
