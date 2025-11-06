import React from 'react';
import './App.css'

const User_feedback = function(){
    return (
        <>
        <div className="feedbackcontainer">
            <section className="feedbackcard">
                <div className="content">Name of the user</div>
                <div className="description">Some Feedback</div>
                <div className="cardfooter">
                    <p className='addition'><span>&#128077;</span>Add feedback</p>
                </div>

            </section>
        </div>
        </>
    )
}
export default User_feedback;