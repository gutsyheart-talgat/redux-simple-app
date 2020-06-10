import React, { useState } from 'react'
import styles from './info.module.css'

function Info() {
  const lines = [
    { id: 1, text: 'Your name: Unknown' },
    { id: 2, text: 'Your job: Unknown' },
    { id: 3, text: 'Your age: Unknown' },
  ]
  const [show, setShow] = useState('show more')
  const [hidden, setHidden] = useState('hidden')
  const render = () =>{
    setShow(hidden)
    const hiddenDiv = document.querySelector('.hidden')
    const div = document.createElement('div')
    div.textContent= 'this is hidden content'
    if (hiddenDiv.includes(div)){
      hiddenDiv.removeChild(div)
    } else{
      hiddenDiv.appendChild(div)
    }
  }
  return (
    <div>
      <div className={styles.wrapper}>
        {
          lines.map((line) => (
            <div
              key={line.id}
              className={styles.line}
            >{line.text}
            </div>
          ))
        }
      </div>
      <button
        onClick={() => render() }
      >{show}</button>
      <div className="hidden"></div>
    </div>
  )}

export default Info
