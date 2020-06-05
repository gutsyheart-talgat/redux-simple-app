import React from 'react'
import styles from './info.module.css'

function Info() {
  const lines = [
    { id: 1, text: 'Your name: Unknown' },
    { id: 2, text: 'Your job: Unknown' },
    { id: 3, text: 'Your age: Unknown' },
  ]
  return (
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
  )
}

export default Info
