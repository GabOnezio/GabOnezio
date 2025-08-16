import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'

const Wrapper = styled.div`
  position: relative;
  display: flex;
`

const Input = styled.input`
  padding-right: 40px;
`

const EyeContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #fff;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Pupil = styled.div`
  width: 8px;
  height: 8px;
  background: #000;
  border-radius: 50%;
`

const Closed = styled.div`
  width: 16px;
  height: 2px;
  background: #000;
`

export default function PasswordInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const [show, setShow] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const pupilRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const input = inputRef.current
    if (!input) return
    const move = (e: MouseEvent) => {
      const rect = input.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      const max = 6
      gsap.to(pupilRef.current, { x: x * max, y: y * max, duration: 0.2 })
    }
    input.addEventListener('mousemove', move)
    return () => input.removeEventListener('mousemove', move)
  }, [])

  return (
    <Wrapper>
      <Input ref={inputRef} type={show ? 'text' : 'password'} {...props} />
      <EyeContainer onClick={() => setShow(!show)}>
        {show ? <Pupil ref={pupilRef} /> : <Closed />}
      </EyeContainer>
    </Wrapper>
  )
}
