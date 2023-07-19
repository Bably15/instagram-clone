import "./App.css";
import Sidebar from "./components/Sidebar/index";
import Homepage from "./pages/Homepage";
function App() {
    return (
        <div className="App">
            <Sidebar />
            <div className="app-homepage">
                <Homepage />
            </div>
        </div>
    );
}

export default App;
