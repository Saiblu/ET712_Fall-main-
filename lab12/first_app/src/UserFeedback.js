import React from 'react';
import './App.css'

const UserFeedback = function(props){
    return (
        <div className="feedbackcontainer">
            <section className="feedbackcard">
                <div className="content">{props.username}</div>
                <div className='description'>{props.children}</div>
                <div className="cardfooter">Date of feedback
                    <p className='addicon'><span>&#10011;</span>Add Feedback</p>

                </div>
                
            </section>
        </div>
    )
}
export default UserFeedback;