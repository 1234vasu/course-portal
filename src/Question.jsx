import Navbar from './Navbar'
import './Question.css'
function Question(){
    return(
         
        <>
        <Navbar/>

        <div class="quiz">
            <div className="new">
        <h1>Create Question</h1>
        <label>Question text</label>
        <input type="text" placeholder="Enter your question"/>
        <label>Options</label>
        <input type="text" placeholder="Option A"/>
        <input type="text" placeholder="Option B"/>
        <input type="text" placeholder="Option C"/>
        <input type="text" placeholder="Option D"/>
        <label for="Quiz">Correct Answer</label>
        <select  name="Quiz" id="Quiz">
            <option value="Quiz">Option A</option>
            <option value="Quiz">Option B</option>
            <option value="Quiz">Option C</option>
            <option value="Quiz">Option D</option>
        </select>
        </div>
        </div>
     
        
        <button>Submit</button>
        
   </>
        
    )
}
export default Question