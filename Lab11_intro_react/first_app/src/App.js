import './App.css';
import sheep from '../src/images/Sheep.jpg';

function App() {
  return (
    <>
    <h1 className='title'>Welcome to React JS</h1>
    <h2 className='author'>Lab 11 by Elias Muniz</h2>
    <h2 style={{ textAlign: 'center', color: 'green' }}>Inline styling</h2>
    <section>
      <label for='user_email'>Enter email: </label>
      <input type='email' id='user_email' placeholder='Enter email address...'></input>
    </section>
    <figure className = 'imgcontainer'>
      <img src={sheep} alt='A sheep'></img>
    </figure>
    </>
  );
}

export default App;
