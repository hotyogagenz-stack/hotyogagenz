import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="app-root">
      <Header />
      <main className="main-area">
        <div className="container">
          <h1>Welcome — New design starts here</h1>
          <p>We'll build this step-by-step. Tell me which section to scaffold first.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
