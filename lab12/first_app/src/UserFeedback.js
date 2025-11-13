import React from 'react';
import './App.css'

const UserFeedback = function({ children }){
    return (
        <div className="feedbackcontainer">
            <section className="feedbackcard">
                {children}
                <div className="cardfooter">
                    <p className='addition'><span>&#128077;</span>Add feedback</p>
                </div>
            </section>
        </div>
    )
}
export default UserFeedback;