import { useEffect, useState } from 'react';
import Header from './Header';
import Dummy from './Dummy';
import { Routes, Route } from 'react-router-dom';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
import Footer from './Footer';
import Instructions from './Instructions';
import Options from './Options';

// api
import getWordFromApi from '../services/api';
// styles
import '../styles/App.scss';

import '../styles/Form.scss';
import '../styles/Header.scss';

function App() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');

  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
    });
  }, []);

  // events

  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
  };

  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);

    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };
  const handleColectWord =(value) => {
    setWord(value);
    setLastLetter('');
    setUserLetters([]);
    
  }

  return (
    <div className="page">
      <Header></Header>
      <main className="main">
        <section>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SolutionLetters
                    word={word}
                    userLetters={userLetters}
                  ></SolutionLetters>
                  <ErrorLetters
                    word={word}
                    userLetters={userLetters}
                  ></ErrorLetters>
                  <Form
                    lastLetter={lastLetter}
                    handleLastLetter={handleLastLetter}
                  ></Form>
                </>
              }
            />

            <Route
              path="/instructions"
              element={<Instructions></Instructions>}
            />
            <Route path="/options" element={<Options handleColectWord={handleColectWord} word={word}></Options>} />
          </Routes>
        </section>
        <Dummy numberOfErrors={getNumberOfErrors()}></Dummy>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
