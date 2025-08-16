import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import PasswordInput from './PasswordInput'

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled(motion.div)`
  background: #000;
  padding: 2rem;
  border-radius: 8px;
  width: 300px;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
`

const Button = styled.button`
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`

export default function LoginModal({ onClose, onLogged }: { onClose: () => void; onLogged: () => void }) {
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit = () => {
    if (mode === 'login') {
      if (email === 'gabrielonezioferreirapessoal@gmail.com' && pass === '12345') {
        onLogged()
        onClose()
      } else {
        alert('Credenciais inválidas')
      }
    } else {
      alert('Registrado!')
      onLogged()
      onClose()
    }
  }

  return (
    <Overlay initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Container initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
        <h3>{mode === 'login' ? 'Login' : 'Registro'}</h3>
        {mode === 'register' && (
          <Input placeholder="nome" value={name} onChange={e => setName(e.target.value)} />
        )}
        <Input placeholder="gmail" value={email} onChange={e => setEmail(e.target.value)} />
        <PasswordInput placeholder="senha" value={pass} onChange={e => setPass(e.target.value)} />
        <Button onClick={handleSubmit}>{mode === 'login' ? 'Login' : 'Registrar'}</Button>
        <Button onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
          {mode === 'login' ? 'Criar conta' : 'Já tenho conta'}
        </Button>
        <Button onClick={onClose}>Fechar</Button>
      </Container>
    </Overlay>
  )
}
