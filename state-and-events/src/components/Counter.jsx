import { useState } from "react"

function Counter() {

    const [counter, setCounter] = useState(0)

    const handleCounterUp = () => {
        setCounter(counter + 1)
    }

    const handleCounterDown = () => {
        setCounter(counter - 1)
    }

    return (
        <div className="Counter">
            <h2>Counter</h2>

            <p>You clicked {counter} times</p>

            <button onClick={handleCounterDown}> - </button>
            <button onClick={handleCounterUp}> + </button>
        </div>
    )
}

export default Counter