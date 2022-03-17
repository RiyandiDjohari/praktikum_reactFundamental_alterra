import Header from "./pages/Header";
import Home from "./pages/Home";
import { listTask } from "./listTask"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Home lists={listTask} />
      </div>
    </div>
  );
}

export default App;
