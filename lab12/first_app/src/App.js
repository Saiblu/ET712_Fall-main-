import './App.css';
import User from './comment.js';
import UserFeedback from './UserFeedback';

// Use the correct file names that actually exist
import avatar1 from "./images/Autobots.png"
import avatar2 from "./images/decepticon.png" 
import avatar3 from "./images/domo.png"

function App() {
  return (
    <>
      <h1 style={{textAlign: "center"}}>Lab 12, React props by Elias Muniz</h1>
      <section className="container">
        <UserFeedback username="Decepticons">
          <User name="Decepticons" image={avatar1} date="Yesterday" comment="Predacons"/>
        </UserFeedback>
        
        <UserFeedback username="Autobots">
          <User image={avatar2} name="Autobots" date="Today" comment="Transformers"/>
        </UserFeedback>
        
        <UserFeedback username="Maximals">
          <User image={avatar3} name="Maximals" date="Two Days Ago" comment="Maximals"/>
        </UserFeedback>
      </section>

    </>
  );
}

export default App;