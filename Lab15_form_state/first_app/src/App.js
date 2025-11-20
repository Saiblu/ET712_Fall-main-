import './App.css';
import React, {useState} from 'react';


function App() {

  // set states for mulitple inputs
  const [inputs, setInputs] = useState({})

  //function to handle changes in all inputs
  const handle_changes = function(event){
    const name = event.target.name
    const value = event.target.value
    //update the states
    setInputs(values =>({...value, [name]: value}))

  }

  // set the state of the gender
  const [myGender, setMygender] = useState("")

  const selectedGender = (event) =>{
    setMygender(event.target.value)
  }
  
  const [textcomment, setComment] = useState ("")
  //function to collect the comments
  const submitted_comments = function(event){
      setComment(event.target.value)
  }

  // function submit form
  const submitform = function(event) {
    event.preventDefault()
  }

  return (
    <div className="App">
      <form className='myform' onSubmit={submitform}>
        <fieldset>
          <legend>Forms in React JS</legend>
          <div className='formgroup'>
            <label for="name">Eneter Your username: </label>
          <input type='text'
            id='name'
            className='inputstyle'
            name='username'
            placeholder='Type your username....'
            value={inputs.username}
            onChange={handle_changes}
          />
          </div>

          <div className='formgroup'>
            <label for="age">Enter your age:</label>
            <input
              type='number'
              id='age'
              name='age'
              placeholder='Type in your age'
              value={inputs.age}
              onChange={handle_changes}
            />
          </div>

        
          {/**Select a gender */}
          <div className='formgroup'>
            <label> select a gender:
              <select value={myGender} onChange={selectedGender}>
                <option value="female" >Female</option>
                <option value="male" >Male</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>

          <div className='formgroup'>
            <label for="comments"> Any suggestion?</label>
              <textarea
              id='comments'
              value={textcomment}
              onChange={submitted_comments}
              placeholder='Type your comments'
              />



          </div>
          {/*submit form */}
          <input type='submit' className='btnsubmit' /> 
        </fieldset>
      </form>
      {/**test the username collected after the submit button */}
      <p className='printresult'>Username = {inputs.username}</p>
      <p className='printresult'>Age = {inputs.age}</p>
      <p className='printresult'>Gender = {myGender}</p>
    </div>
  );
}

export default App;
