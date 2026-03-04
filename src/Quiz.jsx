   import './Quiz.css'
   import Question from './Question'
   import { useNavigate } from 'react-router-dom'
   function Quiz(){
       const navigate = useNavigate();
    return(
        <>
   <div className="edit">
            <h1>Edit Quiz</h1>
            <label>Quiz Title</label>

            <input type="text" placeholder="Title"/>
            <label>Subject</label>
            <input type="text" placeholder="Subject"/>
            <label>Descrption</label>
            <input type="text" placeholder="description"/>
            <label for="tim">Set Time and Date</label>
            <input type="Time" id="tim" name="tim"></input>
            <input type="Date" id="tim" name="tim"></input>
            
        </div>
        <button onClick={() => navigate("/Question")}>create</button>
        </>
    )
   }
   export default Quiz