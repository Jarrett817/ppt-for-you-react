import {useEffect} from "react";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm";

function useMd(string) {
    const isMain = str => (/#{1,2}(?!#)/).test(str)
    const isSub = str => (/^#{3}(?!#)/).test(str)
    let array = string.split(/\n(?=\s*#+?)/).filter(s => s !== "").map(s => s.trim())
    let html = ''
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i + 1] !== undefined) {

            if (isMain(array[i]) && isMain(array[i + 1])) {
                html += `
            <section data-markdown>
               <textarea data-template>
                 ${array[i]}
               </textarea>
            </section>
          `
            } else if (isMain(array[i]) && isSub(array[i + 1])) {
                html += `
            <section>
              <section data-markdown>
               <textarea data-template>
                 ${array[i]}
               </textarea>
              </section>
            </section>
          `
            } else if (isSub(array[i]) && isSub(array[i + 1])) {
                html += `
              <section data-markdown>
               <textarea data-template>
                 ${array[i]}
               </textarea>
              </section>
          `
            } else if (isSub(array[i]) && isMain(array[i + 1])) {
                html += `
              <section data-markdown>
               <textarea data-template>
                 ${array[i]}
               </textarea>
              </section>
          `
            }
        } else {
            if (isMain(array[i])) {
                html += `
              <section data-markdown>
               <textarea data-template>
                 ${array[i]}
               </textarea>
              </section>
          `
            } else if (isSub(array[i])) {
                html += `
                    <section>
                      <section data-markdown>
                       <textarea data-template>
                         ${array[i]}
                       </textarea>
                      </section>
                    </section>          
`
            }
        }
    }
    return html
}
