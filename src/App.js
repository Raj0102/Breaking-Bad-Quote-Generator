import React, {
  useState,
  useEffect
} from 'react';

import './App.css';
import axios from "axios";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const quoteAPI = async () => {
    let arrayOfQuotes = [];
    try {
      const data = await axios.get("https://breaking-bad-quotes.herokuapp.com/v1/quotes");

      arrayOfQuotes = data.data;
      console.log(arrayOfQuotes);
    } catch (error) {
      console.log(error);
    }


    try {
      setQuote(arrayOfQuotes.quote);
      setAuthor(arrayOfQuotes.author);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    quoteAPI();
  }, []);

  return (
    <div className="App">
      {quote}
      {author}
      <button onClick={quoteAPI}>Next one!</button>
    </div>
  );
};

export default App;