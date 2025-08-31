import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>My React App</h1>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
