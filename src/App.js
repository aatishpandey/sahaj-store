import "./App.css";
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer";
import { PageRoutes } from "./utils/Routes";

function App() {
  return (
    <div className="App">
      <Header />
      <PageRoutes />
      <Footer />
    </div>
  );
}

export default App;
