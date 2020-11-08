import React from 'react'
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
function Presentation(){
    let deck = new Reveal({
        plugins: [ Markdown ]
    })
    deck.initialize();
    return(
        <div></div>
    )
}
export default Presentation