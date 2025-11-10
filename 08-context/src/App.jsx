import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"

function App() {
  const context = useContext(ThemeContext)
  const theme = context[0]
  const setTheme = context[1]

  return (
    <>
      {/* Inline backgroundColor use kiya hai taake random RGB color apply ho */}
      <div
        className="h-screen text-white transition-all duration-700"
        style={{ backgroundColor: theme }}
      >
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
        </div>

        <div className="text-center mt-10">
          <button
            onClick={setTheme}
            className="rounded-lg border p-3 bg-white text-black font-semibold hover:scale-105 transition-transform"
          >
            Random Theme
          </button>
        </div>
      </div>
    </>
  )
}

export default App
