import React from "react"
import { hot } from 'react-hot-loader/root'
import styles from './app.css'

function AppComponent() {
  return (
    <div className={styles.title}>content</div>
  )
}

export const App = hot(AppComponent)