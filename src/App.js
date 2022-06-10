import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='project/:id' element={<ProjectDetails></ProjectDetails>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
