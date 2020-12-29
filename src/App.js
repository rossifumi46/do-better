import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import PopupForm from './components/PopupForm';
import { useState } from 'react';
import { step, transport, cityCats, buildings } from './utils/data';
 
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [poem, setPoem] = useState([{}, {}, {}, {}]);
  const [address, setAddress] =useState({});
  
  const [isFirst, setIsFirst] = useState(false);
  const [isOneTwo, setIsOneTwo] = useState(false);
  const [isSecond, setIsSecond] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  const [firstId, setFirstId] = useState(null);
  const [oneTwoId, setOneTwoId] = useState(null);
  const [secondId, setSecondId] = useState(null);
  const [thirdId, setThirdId] = useState(null);

  function handleFirst(id) {
    setFirstId(isFirst ? null : id);
    setIsFirst(id === 2 ? false : !isFirst);
    setFirstId(id);
    setIsOneTwo(id === 2 ? !isOneTwo : false);
    setOneTwoId(null);
    setSecondId(null);
    setIsSecond(false);
    setThirdId(null);
    setIsEnd(false);
    handlePoemChange(step.first[id-1].poem, 0);
  }

  function handleOneTwo(id) {
    setOneTwoId(isFirst ? null : id);
    setIsFirst(!isFirst);
    setSecondId(null);
    setIsSecond(false);
    setThirdId(null);
    setIsEnd(false);
    handlePoemChange(cityCats[id-1].poem, 1);
  }

  function handleSecond(id) {
    if (handleOneTwo && oneTwoId > 2) {
      setSecondId(isSecond ? null : id);
      setIsEnd(!isEnd);
      setIsSecond(!isSecond);
    } else {
      setSecondId(isSecond ? null : id);
      setIsSecond(!isSecond);
    }
    setThirdId(null);
    setIsEnd(false);
    handlePoemChange(step.second[firstId][id-1].poem, 2);
  }

  function handleThird(id) {
    const data = isOneTwo ? buildings[oneTwoId] : transport
    setThirdId(isEnd ? null : id);
    setIsEnd(!isEnd);
    handlePoemChange(data[id-1].poem, 3);
  }

  function handleSubmit() {
    setIsOpen(false);
    
    setIsFirst(false);
    setIsOneTwo(false);
    setIsSecond(false);
    setIsEnd(false);
    setFirstId(null);
    setOneTwoId(null);
    setSecondId(null);
    setThirdId(null);
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
      <Main 
        onFinish={handleFinish}
        onPoemChange={handlePoemChange}
        onAddressSubmit={handleAddress}
        onFirst={handleFirst}
        onOneTwo={handleOneTwo}
        onSecond={handleSecond}
        onThird={handleThird}
        state={{
          first: {
            isFirst,
            firstId
          },
          oneTwo: {
            isOneTwo,
            oneTwoId
          },
          second: {
            isSecond,
            secondId
          },
          third: {
            isEnd,
            thirdId
          }
        }}
      />
      <Footer/>
      { isOpen && <PopupForm onSubmit={handleSubmit} poem={poem} address={address} onCancel={() => {setIsOpen(false);}}/> }
    </div>
  );
}

export default App;