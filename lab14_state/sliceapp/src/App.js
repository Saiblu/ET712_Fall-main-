import './App.css';
import { useState } from 'react';

//list of three message 
const message = ["I think, therefore I am.","I have a dream","The only thing we have to fear is fear itself.", "That's one small step", "In the beginning God created the heavens and the earth."];

function App() {
  
  // set intial state (Slice Card)
  const [counter, setCounter] = useState(1);

  // set initial state (Open and Close)
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <div className="App">
      <h1 className='title'>SliceApp card by Elias Muniz</h1>
      
      {/* Slice Card Section */}
      <section className='slidewrapper' >
        <div className='numberwrapper'>
          <p className="msg">{message[counter-1]}</p>
          <div className={counter===1 ? "active" : ""}><p>1</p></div>
          <div className={counter===2 ? "active" : ""}><p>2</p></div>
          <div className={counter===3 ? "active" : ""}><p>3</p></div>
          <div className={counter===4 ? "active" : ""}><p>4</p></div>
          <div className={counter===5 ? "active" : ""}><p>5</p></div>
        </div>

        <div className='btngroup'>
          <button onClick={function(){if(counter<message.length)setCounter(counter+1)}}>Next</button>
          <button onClick={function(){if(counter>1)setCounter(counter-1)}}>Previous</button>
        </div>
      </section>

      {/* Open and Close Section */}
      <section className='info'>
        <p><b>Cat (felix catus</b>, commonly referred to as domestic cat or house cat) 
        <button className='readmorebtn' onClick={function(){setIsOpen(!isOpen)}}>{isOpen ? "Hide" : "Read More"}</button></p>
      </section>

      <section> 
      {
        isOpen && (
          <div className='readmore'>
            <p>It is a small, carnivorous mammal that is a popular pet and companion animal. 
              It is known for its agility, grace, and independence.</p>
          </div>
        )
      }
      </section>
    </div>
    
  );
}

export default App;
