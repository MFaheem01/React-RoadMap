
const GameHeader = ({ score, moves, onNewGame }) => {
    return (
        <>
            <div className='rounded-2xl shadow-2xl border-0 flex flex-col justify-center text-center m-auto w-100 mt-11 bg-gray-900'>

                <div className='font-bold tracking-wide py-1 text-2xl'>🎮 Memory Card Game</div>
                <div className='flex gap-5 m-auto mt-3 font-bold mb-3'>
                    <div>
                        Score: <span className="text-violet-400">{score}</span>
                    </div>
                    <div>
                        Moves: <span className="text-violet-400">{moves}</span>
                    </div>
                </div>
                <div className="border rounded-xl w-30 m-auto mb-4 p-1 bg-blue-950">
                    <button className="font-semibold cursor-pointer" onClick={onNewGame}>New Game</button>
                </div>
            </div>
        </>
    )
}

export default GameHeader 