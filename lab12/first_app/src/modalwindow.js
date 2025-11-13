import React from 'react';
import "./App.css";

const ModalWindow = function (){ 
    return(
        <>
            <section>
                <div className="modalwindow">
                    <div className="modalcontent">
                        <header>
                            <p className='closemodal'>&#x58;</p>
                        </header>

                        <main className='modalbody'>
                            <input className='commentarea' type='text' placeholder="Type your comment"></input>
                            <p className='description_comment'>Max 200 characters</p>
                            <button className='btnpostfeedback'>Post Feedback</button>
                        </main>
                    </div>
                </div>
            </section>
        </>
    );
}
export default ModalWindow;