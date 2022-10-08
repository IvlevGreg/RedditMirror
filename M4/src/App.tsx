import React from "react"
import { hot } from 'react-hot-loader/root'
import styles from './app.css'
import { Content } from "./shared/Content"
import { Header } from "./shared/Header"
import { Layout } from "./shared/Layout"

function AppComponent() {
  return (
   <Layout >
    <Header />
    <Content>
      content
    </Content>
   </Layout>

  )
}

export const App = hot(AppComponent)