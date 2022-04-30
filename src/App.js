import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <h1>Mern Pizza  </h1> */}
      <Navbar />
      <Homescreen />
    </div>
  );
}

export default App;
