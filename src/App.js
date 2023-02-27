import './style.css';
import Header from './components/Header.js';
import MainContent from './components/MainContent';
import Footer from './components/Footer';


function App() {
  return (
    <div className='App'>
      <div className='page'>
        <Header />
        <MainContent />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
