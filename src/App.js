import React from "react"
import './App.css';
import {Provider} from "./context"
import Root from "./components/root"

function App() {
    return (
        <Provider>
            <div className="App">
                <Root />
        </div>
      </Provider>
  );
}

export default App;
