import { useState } from 'react'
import './App.css'
import Card  from '../components/card'
import Button from '../components/button'

function App() {
  const [card1_show, showVisible1] = useState(false);
  const [card2_show, showVisible2] = useState(false);

  function hideVisibility() {
    showVisible1(false);
    showVisible2(false);
  }

  function showCard1(){
    showVisible1(true);
    showVisible2(false);
    console.log("SHSHS");
  }

  function showCard2(){
    showVisible2(true);
    showVisible1(false);
    console.log("SHSHS");
  }

  return (
    <>
    <Card title="Card Button List" children="Press any button to show card" />
    <Button btn="1" show_function={showCard1} />
    <Button btn="2" show_function={showCard2}/>
    <button onClick={hideVisibility}>Hide</button>
    {card1_show && !card2_show && <Card title="Card 1 Title:" children="Card 1 contents" />}
    {!card1_show && card2_show && <Card title="Card 2 Title:" children="Card 2 contents" />}
    </>
  )
}

export default App
