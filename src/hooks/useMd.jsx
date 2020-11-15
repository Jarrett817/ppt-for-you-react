import {useEffect} from "react";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm";

function useMd(string){
    let jsx=`
    <section data-markdown>
       <textarea data-template>
            ## Slide 1
            A paragraph with some text and a [link](http://hakim.se).
            ---
            ## Slide 2
            ---
            ## Slide 3
       </textarea>
    </section>
   <section data-markdown>
       <textarea data-template>
           ## 这是第二页
           - 第一项
           - 第二项
           - 第三项
           > asdasdasd
       </textarea>
   </section>

`   const isMain=str=>(/#{1,2}(?!#)/).test(str)
    let array=string.split(/\n(?=\s*#+?)/).filter(s=>s!=="").map(s=>s.trim())
    let html=''
    for(let item of array){
      if()
    }
}
