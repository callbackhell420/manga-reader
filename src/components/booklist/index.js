import { useEffect, useState } from 'react';
import * as URLUTILS from '../../utils/URLUtils';
import ChapterList from '../chapterlist';
import Panels from '../panels';
import './index.css';

const BookList = ( props ) => {

    const { books, panels } = props;
    const [ selectedBook, setSelectedBook ] = useState({});

    useEffect(() => {
        
        const [ firstBook ] = books;
        setSelectedBook( firstBook );

    }, [books]);

    useEffect(() => {
        URLUTILS.addHash('book', selectedBook.title);
    }, [selectedBook]);

    const handleBookChange = (book) => {
        setSelectedBook(book);
    }

    return <div className="component book-list">
        <div className='books-container flex-container'>
            { 
                books.map( book => {

                    const { id, title } = book;

                    return <div key={id} className={`book-holder ${title === selectedBook.title ? 'active' : ''}`}>
                        <button onClick={() => handleBookChange(book)} className="book-title">
                            { title }
                        </button>
                    </div>
                } ) 
            }
        </div>
        <div className='chapters-container'>
            {
                selectedBook && selectedBook.chapter_ids && <ChapterList chapterIds = { selectedBook.chapter_ids }/>
            }
        </div>
        <div className='panels-container'>
            {
                panels.pages && panels.pages.length > 0 && <Panels panels = { panels.pages }/>
            }
        </div>
    </div>
}

export default BookList;