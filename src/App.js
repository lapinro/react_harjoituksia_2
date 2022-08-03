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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Button = (props) => {
 
  return (
    <button onClick={() => props.set(props.fb +1)}>{props.text}</button>
  )
}

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0)
{
  return (
    <>
    ei palautetta
    </>
  )
}
else {
  return (
    <>
    <StatisticLine text="hyvä" value ={props.good}/>
    <StatisticLine text="neutraali" value ={props.neutral}/>
    <StatisticLine text="huono" value ={props.bad}/>
    <StatisticLine text="kaikki:" value ={props.good + props.neutral + props.bad}/>
    <StatisticLine text="keskiarvo:" value={(props.good + props.neutral + props.bad) / 3}/>
    <StatisticLine text="positiivisia palautteita: " value={props.good/(props.bad + props.neutral+ props.good)*100}/>
    </>
  )
}

}

const StatisticLine = (props) => {
  return (
    <>
    <p>{props.text} {props.value}</p>
       </>

  )
}

export default App