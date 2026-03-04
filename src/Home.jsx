import Navbar from './Navbar'
import'./Home.css'
import Login from './Login'
import { useNavigate } from 'react-router-dom'
function Home(){
    const navigate =useNavigate();
    return(
        <>
        <Navbar/>
        <div className='head'>
        <h1>Online Quiz Management System</h1>
        <p>Test your knowledge anytime, anywhere</p>
        <button onClick={() => navigate("/Login")}>Log in</button>
        <button onClick={() => navigate("/Student")}>Register</button>
        
        </div>

        <div className="test">
        <h2>Fetured Quizes</h2>
        <p>Quiz 1</p>
        <p>Quiz 2</p>
        <p>Quiz 3</p>
        
        </div>
        </>
    )
}
export default Home