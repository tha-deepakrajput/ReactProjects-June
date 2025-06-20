import React, { useState } from "react";

const App = function () {
  const [color, setColor] = useState("Black");
  return (
    <>
      <div className="border w-full h-screen text-white duration-200 flex flex-col justify-bottom items-center" style={{ backgroundColor: color }}>
        <button
        onClick={()=> setColor(location.reload())}
          className="outline-none bg-white w-30 text-black px-4 py-1 rounded-lg shadow-xl">
          Reset Color
        </button>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 border">
          <div className="flex flex-wrap justify-center gap-3 text-black shadow-lg bg-white px-3 py-2 rounded-xl">
            <button
              onClick={() => setColor("red")}
              style={{ backgroundColor: "red" }}
              className="outline-none px-4 py-1 rounded-full shadow-xl">
              Red
            </button>
            <button
              onClick={() => setColor("orange")}
              style={{ backgroundColor: "orange" }}
              className="outline-none px-4 py-1 rounded-full shadow-xl">
              Orange
            </button>
            <button
              onClick={() => setColor("yellow")}
              style={{ backgroundColor: "yellow" }}
              className="outline-none px-4 py-1 rounded-full shadow-xl">
              Yellow
            </button>
            <button
              onClick={() => setColor("gray")}
              style={{ backgroundColor: "gray" }}
              className="outline-none px-4 py-1 rounded-full shadow-xl">
              Gray
            </button>
            <button
              onClick={() => setColor("pink")}
              style={{ backgroundColor: "pink" }}
              className="outline-none px-4 py-1 rounded-full shadow-xl">
              Pink
            </button>
            <button
              onClick={() => setColor("lavender")}
              style={{ backgroundColor: "lavender" }}
              className="outline-none px-4 py-1 rounded-full shadow-xl">
              Lavender
            </button>
            <button
              onClick={() => setColor("purple")}
              style={{ backgroundColor: "purple" }}
              className="outline-none px-4 py-1 rounded-full shadow-xl">
              Purple
            </button>
            <button
              onClick={() => setColor("blue")}
              style={{ backgroundColor: "blue" }}
              className="outline-none px-4 py-1 rounded-full shadow-xl">
              Blue
            </button>
            <button
              onClick={() => setColor("green")}
              style={{ backgroundColor: "green" }}
              className="outline-none px-4 py-1 rounded-full shadow-xl">
              Green
            </button>
            <button
              onClick={() => setColor("slateBlue")}
              style={{ backgroundColor: "slateBlue" }}
              className="outline-none px-4 py-1 rounded-full shadow-xl">
              SlateBlue
            </button>
            <button
              onClick={() => setColor("olive")}
              style={{ backgroundColor: "olive" }}
              className="outline-none px-4 py-1 rounded-full shadow-xl">
              Red
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;