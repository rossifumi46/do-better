import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import PopupForm from './components/PopupForm';
import { useState } from 'react';
 
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [poem, setPoem] = useState([{}, {}, {}, {}]);
  const [address, setAddress] =useState({});
  function handleSubmit() {
    setIsOpen(false);
  }

  function handleFinish() {
    setIsOpen(true);
  }

  function handleAddress(key, value) {
    setAddress({...address, [key]: value});
  }

  function handlePoemChange(newItem, id) {
    const temp = [...poem];
    temp[id].poem = newItem;
    setPoem(temp);
  }

  return (
    <div className="App">
      <Header/>
      <Main onFinish={handleFinish} onPoemChange={handlePoemChange} onAddressSubmit={handleAddress}/>
      <Footer/>
      { isOpen && <PopupForm onSubmit={handleSubmit} poem={poem} address={address}/> }
    </div>
  );
}

export default App;