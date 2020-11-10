import React, {useEffect} from 'react'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

function Presentation() {
    useEffect(() => {
        Reveal.initialize(
            {
                plugins:[
                    Markdown
                ]
            }
        );
    }, [])

    return (
        <div className="reveal">
            <div className="slides">
               <section>
                   <h1>第一页</h1>
               </section>
                <section>
                    <h2>第二页</h2>
                </section>
            </div>
        </div>
    )
}

export default Presentation