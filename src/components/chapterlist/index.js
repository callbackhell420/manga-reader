import { useEffect, useState } from "react";

import { useDispatch } from 'react-redux';
import { fetchPanels } from "../../features/books/bookAsyncActions";
import { addHash } from "../../utils/URLUtils";

const ChapterList = ( props ) => {

    const { chapterIds } = props;
    const [ selectedChapter, setSelectedChapter ] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        const [ firstChapter ] = chapterIds;
        setSelectedChapter(firstChapter);

    }, [ chapterIds ]);

    useEffect(() => {
        if(selectedChapter) {
            addHash('chapter', selectedChapter);
            dispatch(fetchPanels(selectedChapter));
        }
    }, [selectedChapter]);

    const handleChapterChange = ( chapterId ) => {
        setSelectedChapter(chapterId);
    } 


    return <div className="flex-container chapter-list">
            { 
                chapterIds.map( chapterId => {

                    return <div key={chapterId} className={`chapter-holder ${chapterId === selectedChapter ? 'active' : ''}`}>
                        <button onClick={() => handleChapterChange(chapterId)} className="chapter-title">
                            { chapterId }
                        </button>
                    </div>
                } ) 
            }
    </div>
    
}

export default ChapterList;