import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const Bar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  color: #fff;
`

const Profile = styled(motion.div)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  position: relative;
`

const Tooltip = styled(motion.div)`
  position: absolute;
  right: 0;
  top: 50px;
  background: #000;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.8rem;
  white-space: nowrap;
`

export default function NavBar({ onLoginClick, logged }: { onLoginClick: () => void; logged: boolean }) {
  const [hover, setHover] = React.useState(false)
  return (
    <Bar>
      <div>GabOnezio</div>
      <Profile
        onClick={onLoginClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        whileHover={{ scale: 1.1 }}
      >
        <AnimatePresence>
          {hover && !logged && (
            <Tooltip initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              se registre ou faça um login
            </Tooltip>
          )}
        </AnimatePresence>
      </Profile>
    </Bar>
  )
}
