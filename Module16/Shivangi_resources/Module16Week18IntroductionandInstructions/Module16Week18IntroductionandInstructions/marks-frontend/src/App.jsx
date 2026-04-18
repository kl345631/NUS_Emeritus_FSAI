import { useState } from "react"
import axios from "axios"

function App() {

  const [hours,setHours] = useState("")
  const [marks,setMarks] = useState(null)

  const predictMarks = async () => {

    const response = await axios.post(
      "http://localhost:5000/predict",
      {
        hours: Number(hours)
      }
    )

    setMarks(response.data.predicted_marks)
  }

  return (

    <div style={{padding:"40px"}}>

      <h1>AI Marks Predictor</h1>

      <input
      type="number"
      placeholder="Enter study hours"
      value={hours}
      onChange={(e)=>setHours(e.target.value)}
      />

      <br/><br/>

      <button onClick={predictMarks}>
        Predict Marks
      </button>

      <br/><br/>

      {marks && (
        <h2>Predicted Marks: {marks}</h2>
      )}

    </div>
  )
}

export default App