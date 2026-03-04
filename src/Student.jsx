import Navbar from "./Navbar"
import Home from "./Home"
import './Student.css'
function Student(){
    return(
        <>
        <Navbar/>
        <div className="reg">
            <div className="std">
        <h2>Student Registration</h2>
         Name:<input type="text"></input>
         <br></br>
         Register No:<input type="text"></input>
         <br></br>
         Department:<input type="text"></input>
         <br>
         </br>
         Year:<input type="text"></input>
         <br>
         </br>
         Email:<input type="email"></input>
         <br></br>
         Password:<input type="password"></input>
         <br></br>
         Confrim Password:<input type="password"></input>
         <br></br>
         <button onClick={Home()}>Submit</button>
         </div>
         </div>

        </>
    )
}
export default Student;