/* eslint-disable react/jsx-key */
import './App.css'
import { useState } from "react";
import { Card } from "./components/Card";
import { CreateCard } from "./components/CreateCard";
function App() {

  const [cards, setcards] = useState([]);

  async function getCards() {
    const mycards =  await(await fetch("http://localhost:3000/cards")).json();
    setcards(mycards);
  }
  getCards();

  return (
    <>
      <CreateCard></CreateCard>
      <div style={{display:"grid",gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "auto", gap: 10}}>
        {cards.map((card) =>{
          return <Card data={card}></Card>
        })}
      </div>
    </>
  )
}

export default App
