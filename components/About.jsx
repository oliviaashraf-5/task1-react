import { useState } from "react";

function About() {
  const [random, setRandom] = useState(null);

  const generateRandom = () => {
    setRandom(Math.floor(Math.random() * 100));
  };

  return (
    <section>
      <h2>About Component</h2>
      <button onClick={generateRandom}>Generate Random Number</button>
      {random !== null && <p>Random Number: {random}</p>}
    </section>
  );
}

export default About;
