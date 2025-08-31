import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>Home Component</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </section>
  );
}

export default Home;
