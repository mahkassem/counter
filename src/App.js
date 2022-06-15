import "./App.css";
import Counter from "./Counter";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Counter count={0} />
    </div>
  );
}

export default App;
