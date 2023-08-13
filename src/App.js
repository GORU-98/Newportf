import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Project from './components/Project';
import About from './components/About';
import Langm from './components/Langm';
import Contact from './components/Contact';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
function App() {
  return (
    <>
<BrowserRouter> 
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route index element={<Home />}/>
        <Route path='/about' element={<About margin={"-1rem"} height={"90vh"}/>}/>
        <Route path='/services' element={<Langm margin={"2rem"} />}/>
        <Route path='/project' element={<Project  margin={"0rem"} />}/>
        <Route path='/contact' element={<Contact  margin={"-1rem"} height={"88vh"}/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
