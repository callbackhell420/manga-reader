import { useEffect, useState } from "react";
import { addHash } from "../../utils/URLUtils";

import './index.css';

const Panels = ( props ) => {

    const { panels, updateChapter } = props;
    const [ activePanel, setActivePanel ] = useState();

    useEffect(() => {
        const [ firstPanel ] = panels;
        setActivePanel( firstPanel.id );
    } , [ panels ]);

    useEffect(() => {   
        if(activePanel) {
            addHash('panel', activePanel);
        }
    }, [activePanel]);

    const handleImageClick = ( event ) => {
        
        const element = event.target;
        const xPos = event.pageX - element.offsetLeft;

        const firstElementId = panels[0].id;
        const lastElementId = panels[panels.length - 1].id;

        if((element.width / 2) >= xPos) {
            if(activePanel > firstElementId) {
                setActivePanel(activePanel - 1);
            } else {
                //updateChapter(-1);
            }
        } else {
            if(activePanel < lastElementId) {
                setActivePanel(activePanel + 1);
            } else {
                //updateChapter(1);
            }
        }
    }

    return <div className="component">
       <div className="panels-container">
        {
            panels.map( panel => {

                const { id, image } = panel;

                return <div key={id} className={`panel ${id === activePanel ? 'visible' : 'hidden'}`}>
                    <img onClick={handleImageClick} src={image.file} alt='' />
                </div>
            } )
        }
       </div>
    </div>
}

export default Panels;