import React from 'react'

export default function Header(){
  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">YourBrand</div>
        <nav className="nav">
          <button>Home</button>
          <button>About</button>
          <button>Contact</button>
        </nav>
      </div>
    </header>
  )
}
