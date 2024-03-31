import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Projects from './components/projects/projects';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Particles from './components/Particles';

function App() {
  return (
    <div className="App">
      <Particles id="tsparticles"/>
      <Navbar/>
      <Home/>
      <Projects/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
