import React, {useEffect, useState} from 'react'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

function Presentation() {


    useEffect(() => {
        Reveal.initialize(
            {
                plugins: [
                    Markdown
                ]
            }
        );
    },[])
    return (
        <div className="reveal">
            <div className="slides" dangerouslySetInnerHTML={{__html: jsx}}/>
        </div>
    )
}

export default Presentation