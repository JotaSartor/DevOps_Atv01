import { useState } from "react";
import "./style.css";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="container">
      <h1>Projeto DevOps 🚀</h1>

      <p>Contador: {count}</p>

      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>
          Incrementar
        </button>

        <button onClick={() => setCount(count - 1)}>
          Decrementar
        </button>

        <button onClick={() => setCount(0)}>
          Resetar
        </button>
      </div>
    </div>
  );
}

export default App;