import { Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Blog from './routes/Blog';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Projects from './routes/Projects';
import Error from './routes/Error';
import Navbar from './components/Navbar';
import './style.css'
import Footer from './components/Footer';
import BlogPage from './routes/BlogPage';


function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog/:id' element={<BlogPage/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
