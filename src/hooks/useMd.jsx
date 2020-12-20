function useMd(string) {
    //匹配以一个或两个#开头的字符串
    const isMain = str => (/^#{1,2}(?!#)/).test(str)
    //匹配以3到6个#开头的字符串
    const isSub = str => (/^#{3,6}(?!#)/).test(str)
    //回车键并且后面一定会出现多个不为空白符的字符和一个到多个的#
    let array = string.split(/\n(?=\s*#+?)/).filter(s => s !== "").map(s => s.trim())
    let html = ''
    for (let i = 0; i < array.length - 1; i++) {
        //如果大于1个页面
        if (array[i + 1] !== undefined) {
            //如果当前段落和下一个段落都是主页面
            if (isMain(array[i]) && isMain(array[i + 1])) {
                html += `
                    <section data-markdown>
                       <textarea data-template>
                         ${array[i]}
                       </textarea>
                    </section>
          `
                //如果当前是主页面，下一个是子页面
            } else if (isMain(array[i]) && isSub(array[i + 1])) {
                html += `
                <section>
                  <section data-markdown>
                   <textarea data-template>
                     ${array[i]}
                   </textarea>
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
              </section>
          `
            }
            //如果只有一个页面
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

export {useMd}
