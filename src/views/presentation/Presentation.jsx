import React, {useEffect, useState} from 'react'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import {useMd} from '../../hooks/useMd'
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
    let html=useMd(`
# 开班典礼1
  - x
  - y

## 课程介绍2
a

## 老师介绍3
b

## 常见问题4
c

### 问题1
d

### 问题2
e

## 谢谢5
f
    `)

    return (
        <div className="reveal">
            <div className="slides" dangerouslySetInnerHTML={{__html: html}}/>
        </div>
    )
}

export default Presentation