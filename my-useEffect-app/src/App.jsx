import {useState} from 'react'
import './App.css'
import {Box} from "./components/Box/Box.jsx";

function App() {
    const [isVisible, setVisible] = useState(false);

    return (
        <>
            <button onClick={() => setVisible(!isVisible)}>Toggle</button>
            {isVisible ? <Box/> : null}
        </>
    )
}

export default App
