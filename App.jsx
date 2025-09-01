import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>My React App</h1>
      <Home />
      <About />
      <Contact />
      <hr />
      <h2>Products List</h2>
      <Products />
    </div>
  );
}

export default App;
