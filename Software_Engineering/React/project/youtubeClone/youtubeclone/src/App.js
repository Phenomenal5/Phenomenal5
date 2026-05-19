import "./App.css";
import Header from "./component/Header";
import Mainvid from "./component/Mainvid";
import Shorts from "./component/Shorts";
import Sidebar from "./component/Sidebar";
import { MovieProvider } from "./context/MovieContext";

function App() {

  return (
    <MovieProvider>
      <div className="App">
        <Header />
        <div className="flex h-screen">
          <div className="w-1/7 bg-gray-100">
            <Sidebar />
          </div>
          <div className="flex-1 overflow-auto">
            <Mainvid />
            <Shorts />
          </div>
        </div>
      </div>
    </MovieProvider>
  );
}

export default App;
