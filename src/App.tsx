import './App.css';
import debounce from "lodash/debounce";
import axios from 'axios';
import { useEffect, useState } from 'react';
const ITEMS_API_URL = 'https://example.com/api/items';
const DEBOUNCE_DELAY = 500;

function App() {
  const [input, setInput] = useState('');

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (input) console.log('input:', input);
  }, [input]);

  return (
    <div className="App">
      <div>
        <input type='text' onChange={handleChange}/>
      </div>
      <div>

      </div>
    </div>
  );
}

export default App;
