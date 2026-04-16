import React from 'react'
import { createRoot } from 'react-dom/client'

function EmptyApp(){
  return (
    <div style={{padding:40,fontFamily:'Plus Jakarta Sans,sans-serif'}}>
      <h1>Empty site</h1>
      <p>This repository was cleared to a minimal starter. Build your site here.</p>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EmptyApp />
  </React.StrictMode>
)
