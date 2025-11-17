import { useContext } from "react"
import { Context } from "./components/Context"

function App() {
  const [Theme, setRandomTheme] = useContext(Context)

  return (
    <div className='h-screen text-white transition-all duration-700' style={{ backgroundColor: Theme }}>
      <div>
        <div className="flex justify-between p-5 items-center">
          <h5 className="capitalize text-3xl">maxcore</h5>
          <div>
            <ul className="unstyled flex gap-3">
              <li><a href="#" className="capitalize font-medium">home</a></li>
              <li><a href="#" className="capitalize font-medium">about</a></li>
              <li><a href="#" className="capitalize font-medium">contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border w-50 cursor-pointer text-center">
          <button onClick={setRandomTheme}>click to see magic</button>
        </div>
      </div>
    </div>
  )
}

export default App
