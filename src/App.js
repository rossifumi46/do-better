import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import PopupForm from './components/PopupForm';
import { useState } from 'react';
 
function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleSubmit() {
    setIsOpen(false);
  }

  function handleFinish() {
    setIsOpen(true);
  }

  return (
    <div className="App">
      <Header/>
      <Main onFinish={handleFinish}/>
      <Footer/>
      { isOpen && <PopupForm onSubmit={handleSubmit}/> }
    </div>
  );
}

export default App;