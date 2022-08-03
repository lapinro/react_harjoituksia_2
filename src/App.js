import { useState } from 'react'



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h3>Palautetta</h3>
      <Button set={setGood} fb={good} text={"hyvä"}/>
      <Button set={setNeutral} fb={neutral} text={"neutraali"}/>
      <Button set={setBad} fb={bad} text={"huono"}/>

      <h3>Statistiikka</h3>
      <Display feedback={"hyvä"} count={good}/>
      <Display feedback={"neutraali"} count={neutral}/>
      <Display feedback={"huono"} count={bad}/>
    </div>
  )
}

const Button = (props) => {
  
  return (
    <button onClick={() => props.set(props.fb +1)}>{props.text}</button>
  )
}

const Display = (props) => {
  return (
    <div>{props.feedback} {props.count}</div>
  )
}

export default App