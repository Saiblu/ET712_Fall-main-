import React from 'react';
import './App.css'
import ModalWindow from './modalwindow';


const UserFeedback = function(props){
    
    const openmodalwindow = ()=>{
        const modalwindow = document.querySelector('.modalwindow');
        modalwindow.style.display = "block";

        const modalusername = document.querySelector('.modalusername');
        modalusername.innerHTML = `<em>${props.username}</em>`;
    };

    
    return (
        <>
            <div className="feedbackcontainer">
                <section className="feedbackcard">
                    <div className="content">{props.username}</div>
                    <div className='description'>{props.children}</div>
                    <div className="cardfooter">
                        <p className='addicon' onClick={openmodalwindow}><span>&#10011;</span>Add Feedback</p>

                    </div>
                    
                </section>
            </div>

            <ModalWindow />
        </>
    )
}
export default UserFeedback;