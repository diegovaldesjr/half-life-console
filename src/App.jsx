import { useState } from "react"
import { HLConsoleHeader } from "./components/HLConsoleHeader"

const App = () => {
  const [history, setHistory] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addCommand = (event) => {
    event.preventDefault()
    setHistory([...history, inputValue])
    setInputValue('')
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="bg-console h-screen text-white p-2 flex flex-col">
      <HLConsoleHeader/>

      <code className="flex flex-col history grow overflow-auto mb-2 p-2">
        {
          history.map((item, index) => (
            <span key={index} className="hover:underline">
              {item}
            </span>
          ))
        }
      </code>

      <form className="flex justify-center items-center" onSubmit={addCommand}>
        <input 
          type="text" 
          className="input-console w-full p-1 text-white mr-2"
          value={inputValue}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="submit-btn py-1 pl-2 pr-4 text-white text-left"
        >
          Submit
        </button>
      </form>

    </div>
  )
}

export default App
