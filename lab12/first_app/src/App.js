import './App.css';
import User from './comments';

//import images
import avatar1 from "./images/avatar_autobots.png"
import avatar2 from "./images/avatar_decepticons.png"
import avatar3 from "./images/avatar_maximals.png"

function App() {
  return (
    <>
    <h1 style={{textAlign: "center"}}>Lab 12, React props by Elias Muniz</h1>
    <section className="container">
      {/** user 1 */}
      <User image={avatar1} name="Autobots" date="Today" comment="Transformers"/>

       {/** user 2 */}
      <User image={avatar2} name="Decepticons" date="Yesterday" comment="Predacons"/>

       {/** user 3 */}
      <User image={avatar3} name="Maximals" date="Two Days Ago" comment="Maximals"/>
      </section>
    
    <section className="container">
      {/** User feedback component instances */}
      <User_feedback> <User image={avatar1} name="Autobots" date="Today" comment="Transformers"/> </User_feedback >
      <User_feedback >
      <User image={avatar2} name="Decepticons" date="Yesterday" comment="Predacons"/>
      </User_feedback >
      <User_feedback >
      <User image={avatar3} name="Maximals" date="Two Days Ago" comment="Maximals"/>
      </User_feedback >
    </section>
    
    </>
  );
}

export default App;
