import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/Home"
import About from "./components/About"
import Profile from "./components/Profile"
import Navbar from './components/Navbar';
import SingleUser from './components/SingleUser';

//https://restcountries.com/#endpoints-all
//https://hub.dummyapis.com/employee
//https://www.codingdeft.com/posts/react-fetch-data-api/

function App() {
  return (
      <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<><Home/></>}/>
            <Route exact path="/:id" element={<><SingleUser/></>}/>
            <Route exact path="/about" element={<><About/></>}/>
            <Route exact path="/profile" element={<><Profile/></>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
