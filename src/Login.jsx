import Navbar from "./Navbar";
import './Login.css'
function Login(){
    return(
        <>
        <Navbar/>
        <div className="log-container">
        <div className="log">

        <h1>Login Page</h1>
        Email: <input type="email"></input>
        
        Password: <input type="password"></input>
    
        <label for="role">Select Role:</label>
        <select name="role" id="role">
            <option value="select">select</option>
            <option value="Student">Student</option>
            <option value="staff">staff</option>
        </select>
        
       <button>Log in</button>
       <button>New Register</button>
    
       </div>
       </div>

        </>
    )
}
export default Login
