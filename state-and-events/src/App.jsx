import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {

  const [theme, setTheme] = useState('bright')

  const handleThemeChange = event => {
    const selectedValue = event.target.value
    setTheme(selectedValue)
  }

  return (

    <div className={`App ${theme}`}>

      <h1>Contador básico</h1>

      <Counter />

      <h1>Selector de tema D:</h1>

      <select onChange={handleThemeChange}>
        <option value="light"> Claro </option>
        <option value="dark"> Oscuro </option>
        <option value="highContrast"> Alto contraste </option>
      </select>

    </div>
  )
}

export default App
