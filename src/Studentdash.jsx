import Navbar from './Navbar'
import './Studentdash.css'
import { useNavigate } from 'react-router-dom'
import Home from './Home'
function StudentDash(){
   const nav =useNavigate();
   return(
    <>
    <Navbar/>
    <div className='top'>
    <h1>Welcome to Quiz!!!</h1>
    <div className='ava'>
    <h3>Avaliable Quiz</h3>
    <a href="">Quiz 1</a>
   
    <a href="">Quiz 2</a>
   
    <a href="">Quiz 3</a>
    </div>
    <div class="inc">
    <h3>Completed Quiz</h3>
    <p>Quiz 1</p>
    <p>Quiz 2</p>
    </div>
    <div className='com'>
    <h3>Incompleted Quiz</h3>
    <p>Quiz 3</p>
    </div>

    <button onClick={() => nav("/")}>Log out</button>

   </div>
    </>
   ) 
}
export default StudentDash