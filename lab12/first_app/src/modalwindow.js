import React from 'react';
import "./App.css";

const ModalWindow = function (){ 
    
    const closemodalwindow = () =>{
        const modalwindow = document.querySelector('.modalwindow');
        modalwindow.style.display = "none";
    }
    const collectcomment = () =>{

    
        let commentarea = document.querySelector('.commentarea')
        const commentlist = document.querySelector('.commentlist')
        const modalusername = document.querySelector('.modalusername').textContent
        const postdate = new Date().toLocaleDateString()
        const modalwindow = document.querySelector('.modalwindow')

        /* append comment from the modal window to the comment list */
        commentlist.innerHTML += `<li><em><b>${modalusername}</b></em> --- ${commentarea.value} --- <span style= "font-size: 0.8rem; color: gray;">Posted on ${postdate}</span></li>`
        commentarea.value = ''
        modalwindow.style.display = "none";
    }
    return(
        <>
            <section className="modalwindow">
                <div className="modalcontent">
                    <header className='modalheader'>
                        <p>Add feedback to <b className='modalusername'></b></p>
                        <p className='closemodal' onClick={closemodalwindow}>&#x58;</p>
                    </header>

                    <main className='modalbody'>
                        <input className='commentarea' type='text' placeholder="Type your comment"></input>
                        <button className='btnpostfeedback' onClick={collectcomment}>Post Feedback</button>
                    </main>
                </div>
            </section>
        </>
    );
}
export default ModalWindow;