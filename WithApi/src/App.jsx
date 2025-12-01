import axios from "axios";
import { useState } from "react"
import Navbar from "./components/Navbar";
function App() {
  const [keyword, setKeyword] = useState("")
  const [track, setTrack] = useState([])

  const [isLoading, setisLoading] = useState(false)

  const getTracks = async () => {
    setisLoading(true)
    let response = await axios.get(`https://v1.nocodeapi.com/feemo09/spotify/tdDSkYjViTyjdpAk/search?q=${keyword}&type=track`)
    // console.log(response.data.tracks.items);
    setTrack(response.data.tracks.items)
    setisLoading(false)

  }

  return (
    <>
      <Navbar keyword={keyword} setKeyword={setKeyword} getTracks={getTracks} />
      <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-10"} >

        {isLoading && (
          <div className="fixed inset-0 flex items-center justify-center ">
            <div className="animate-spin rounded-full m-auto flex text-center h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
          </div>
        )}

        {
          track.map((elem, index) => {
            return (

              <div className="max-w-sm bg-white rounded-lg shadow-2xl overflow-hidden mb-5">
                <div className="p-4 flex justify-center">
                  <img
                    src={elem.album.images[0].url}
                    alt="Shoes"
                    className="rounded-xl w-48 h-48 object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h2 className="text-xl font-semibold mb-2">{elem.name}</h2>
                  <p className="text-gray-600 mb-1 font-medium">
                    Artist : {elem.album.artists[0].name}
                  </p>
                  <p className="text-gray-600 font-medium mb-3">
                    Release_date : {elem.album.release_date}
                  </p>
                  <div className="flex justify-center">
                    <div className="text-white px-4 py-2">
                      <audio src={elem.preview_url} controls></audio>
                    </div>
                  </div>
                </div>
              </div>

            )
          })
        }


      </div >
    </>
  )
}

export default App
