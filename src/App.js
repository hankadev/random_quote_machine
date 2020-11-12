import { useState, useEffect, useCallback } from 'react';
import './App.css';
import Quote from './Quote'

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch('https://random-quote-machine-42.firebaseio.com/quotes.json')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setQuotes(data);
          setQuote(data[0]);
        }
      });
  }, []);

  const changeQuoteHandler = useCallback(
    () => {
      if (quotes && quotes.length > 0) {
        const index = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[index]);
      }
    },
    [quotes],
  )

  return (
    <div className="App">
      <div>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/250px-Star_Wars_Logo.svg.png'
          alt='star wars logo'
        />
      </div>
      <Quote
        quote={quote}
        changeQuoteHandler={changeQuoteHandler}
      />
    </div>
  );
}

export default App;
