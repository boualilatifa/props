
import './App.css'
import Profilee from './profile/Profilee'
import im1 from "./a.png"

function App() {

  const person = {
    FullName: "Latifa Bouali" , 
  Bio: "I am student at Higher Institute for Computer Science and Multimedia of Gabes , I am 20 years old ",
    Profes: "Full stack js developper" ,
   } 
    const handleName=(x)=>alert(x);

  return (
    <div>
    
      <Profilee person={person} handleName={handleName}/>
      <img src={im1}/>
    </div>
  )
}

export default App;