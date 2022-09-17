import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import BookList from './components/booklist';
import Loader from './components/loader';
import { fetchAllBooks } from './features/books/bookAsyncActions';

const App = () => {

  const books = useSelector(state => state.books);
  const dispatch = useDispatch();

  const [ loading, setLoading ] = useState(books.loading);

  useEffect(()=> {
    dispatch(fetchAllBooks());
  }, []);

  useEffect(() => {
    setLoading(books.loading);
  },[books]);

  return (
    <div className="App">
      {
        loading ? <Loader /> : <>
          <BookList
            {...books}
          />
        </>
      }
    </div>
  );
}

export default App;
