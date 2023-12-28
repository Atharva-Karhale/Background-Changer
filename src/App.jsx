import { useState } from "react"

function App() {
  const [color, setColor] = useState("white")

  return (
    <div className = "w-full h-screen duration-800"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-md">
          <div className="font-bold font-mono"> Click on any color = </div>
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-black bg-red-600 shadow-lg"
          >Red</button>

          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-black bg-green-500 shadow-lg"
          >Green</button>

          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-black bg-blue-500 shadow-lg"
          >Blue</button>

          
          <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white bg-black shadow-lg"
          >Black</button>

          <button onClick={() => setColor("rgb(245 158 11)")} className="outline-none px-4 py-1 rounded-full text-black bg-amber-500 shadow-lg"
          >Amber</button>

          <button onClick={() => setColor("teal")} className="outline-none px-4 py-1 rounded-full text-black bg-teal-500 shadow-lg"
          >Teal</button>

        </div>
      </div>
    </div>
  )
}

export default App
