import React, { useState }from 'react';
import './App.css';
import BoxForm from './components/BoxForm';
import BoxList from './components/BoxList';

function App() {
  const [allboxes, setallboxes] = useState([]);

  const [box, setbox] = useState({
    size: "",
    color: ""
  })

  const addBox = () => {
    const [...currBox] = allboxes;
    currBox.push(box);
    setallboxes(currBox);
  }

  return (
    <div className="App">
      <BoxForm 
        box={ box }
        setbox={ setbox }
        newSubmit={ addBox }
      />



      <BoxList allBoxies = {allboxes} />

    </div>
  );
}

export default App;
