import './App.css';
import debounce from "lodash/debounce";
import { useCallback, useEffect, useState } from 'react';
const DEBOUNCE_DELAY = 500;
const apiResults = ['Denver', 'Colorado', 'New York', 'California'];

function App() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState<string []>([]);

  const handleChange = (event: any) => {
    setInput(event.target.value);
  };

  const debouncedChangeHandler = useCallback(
    debounce(handleChange, DEBOUNCE_DELAY)
  , []);

  useEffect(() => {
    const fetchData = () => {
      new Promise(resolve => setTimeout(resolve, 2000, apiResults)).then((response: any) => setResults(response));
    };

    if (input) {
      console.log('input:', input);
      fetchData();
    }
  }, [input]);

  useEffect(() => {
    if (results) console.log(results);
  }, [results]);

  return (
    <div className="App">
      <div>
        <input type='text' onChange={debouncedChangeHandler}/>
      </div>
      <div>

      </div>
    </div>
  );
}

export default App;
