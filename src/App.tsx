import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import NavBar from './components/NavBar'
import LoginModal from './components/LoginModal'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Glinke';
    src: url('/fonts/glinke.otf') format('opentype');
  }
  body {
    margin: 0;
    font-family: 'Glinke', sans-serif;
    background: #111;
    color: #fff;
  }
`

export default function App() {
  const [open, setOpen] = useState(false)
  const [logged, setLogged] = useState(false)

  return (
    <>
      <GlobalStyle />
      <NavBar onLoginClick={() => setOpen(true)} logged={logged} />
      {open && (
        <LoginModal onClose={() => setOpen(false)} onLogged={() => setLogged(true)} />
      )}
      {logged && <div style={{ padding: '2rem' }}>Dashboard</div>}
    </>
  )
}
