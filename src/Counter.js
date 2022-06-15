import { useState } from "react";

function Counter(props) {
  const [count, setState] = useState(props.count);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setState(count - 1)}> - </button>
      <button onClick={() => setState(count + 1)}> + </button>
    </div>
  );
}

export default Counter;
