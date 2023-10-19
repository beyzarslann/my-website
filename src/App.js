import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Anasayfa from "./pages/Anasayfa";
import GithubRepos from "./pages/GithubRepos";
import Hakkımda from "./pages/Hakkimda";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/anasayfa" element={<Anasayfa />} />
          <Route path="/hakkimda" element={<Hakkımda />} />
          <Route path="/githubrepos" element={<GithubRepos/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;