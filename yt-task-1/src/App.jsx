import './App.css'
import Card from './components/Card';
import GameHeader from './components/GameHeader'

const cardValues = [
  "🍎", "🍌", "🍇", "🍊", "🍓",
  "🥝", "🍑", "🍒", "🍌", "🍇",
  "🍊", "🍓", "🥝", "🍑", "🍒",
];

function App() {
  return (
    <>
      <GameHeader score={2} moves={10} />
      <div className="grid grid-cols-5 gap-2 border w-100 p-x-1 shadow-2xl text-center m-auto rounded-2xl bg-gray-900 mt-6">
        {cardValues.map((cardv, index) => (
          <Card key={index} cardv={cardv} />
        ))}
      </div>
    </>
  )
}

export default App;
