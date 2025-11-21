import './App.css'
import { useState, useEffect } from 'react';
import Card from './components/Card';
import GameHeader from './components/GameHeader'

const cardValues = [
  "🍎", "🍌", "🍇", "🍊", "🍓",
  "🥝", "🍑", "🍒", "🍌", "🍇",
  "🍊", "🍓", "🥝", "🍑", "🍒",
];

function App() {

  const [cards, setCards] = useState(cardValues.sort(() => Math.random() - 0.5));
  const [flipped, setFlipped] = useState([]); // abhi flip kiye gaye cards
  const [matched, setMatched] = useState([]);

  const [moves, setMoves] = useState(0);



  const handleCardClick = (index) => {
    // agar card already matched hai to ignore
    if (matched.includes(index)) return;

    // agar card already flipped hai to ignore
    if (flipped.includes(index)) return;

    // ✅ agar pehle se 2 cards flip hain to teesra flip na ho
    if (flipped.length === 2) return;

    // counts value 
    setMoves(moves + 1);

    setFlipped((prev) => [...prev, index]);
  };


  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;

      if (cards[first] === cards[second]) {
        setMatched((prev) => [...prev, first, second]); // index store
        setFlipped([]); // match hone par reset
      } else {
        setTimeout(() => setFlipped([]), 1000); // non-match case
      }
    }
  }, [flipped, cards]);




  return (
    <>
      <GameHeader score={matched.length} moves={flipped.length} />
      <div className="grid grid-cols-5 gap-2 border border-0 w-100 p-4 shadow-2xl  text-center m-auto rounded-2xl bg-gray-900 mt-6">
        {cards.map((cardv, index) => (
          <Card
            key={index}
            cardv={cardv}
            isFlipped={flipped.includes(index) || matched.includes(index)} // index check
            onClick={() => handleCardClick(index)}
          />
        ))}


      </div>
    </>
  )
}

export default App;
