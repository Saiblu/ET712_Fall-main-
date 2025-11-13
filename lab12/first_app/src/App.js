import './App.css';
import User from './comments';
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
        <User image={avatar1} name="Autobots" date="Today" comment="Transformers"/>
        <User image={avatar2} name="Decepticons" date="Yesterday" comment="Predacons"/>
        <User image={avatar3} name="Maximals" date="Two Days Ago" comment="Maximals"/>
      </section>
    
      <section className="container">
        <UserFeedback>
          <User image={avatar1} name="Autobots" date="Today" comment="Transformers"/>
        </UserFeedback>
        <UserFeedback>
          <User image={avatar2} name="Decepticons" date="Yesterday" comment="Predacons"/>
        </UserFeedback>
        <UserFeedback>
          <User image={avatar3} name="Maximals" date="Two Days Ago" comment="Maximals"/>
        </UserFeedback>
      </section>
    </>
  );
}

export default App;