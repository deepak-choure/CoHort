import { useState } from 'react'
import { Button} from "@repo/ui/button"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    {count}

    <button onClick={()=>setCount(count+1)}>Touch me </button>
    <Button appName='React-app'>click to alert</Button>
  </div>
  )
}

export default App
