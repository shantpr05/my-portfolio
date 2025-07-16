import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TechStack from './components/TechStack';

const App = () => (
  <div className='font-sans text-gray-800'>
    <Header />
    <TechStack />
    <Projects />
    <Contact />
  </div>
);

export default App;
