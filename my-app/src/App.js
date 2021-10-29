import "./App.css";
import { Message } from "./components/Message/Message";

const text = "Hello World!";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Message message={text} />
            </header>
        </div>
    );
}

export default App;
