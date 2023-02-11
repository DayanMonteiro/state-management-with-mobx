import { useState } from "react";
import { observer } from "mobx-react-lite";

import "./App.css";

const App = observer((props) => {
  console.log("props", props);

  return (
    <div className="App">
      <h1>Counter</h1>
      <p>Value: {props.store.count}</p>

      <button type="button" onClick={() => props.store.increment()}>
        Increment
      </button>
      <button type="button" onClick={() => props.store.decrement()}>
        Decrement
      </button>
    </div>
  );
});

export default App;
