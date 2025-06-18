// ** React Imports
import { useEffect, ReactNode } from 'react'

// ** Emotion Imports
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

// ** MUI Imports
import type { Direction as ThemeDirection } from '@mui/material'

interface DirectionProps {
  children: ReactNode
  direction: ThemeDirection
}

// Optional: basic RTL cache without stylis-plugin-rtl
const rtlCache = createCache({
  key: 'muirtl',
  prepend: true
})

const Direction = ({ children, direction }: DirectionProps) => {
  useEffect(() => {
    document.dir = direction
  }, [direction])

  if (direction === 'rtl') {
    return <CacheProvider value={rtlCache}>{children}</CacheProvider>
  }

  return <>{children}</>
}

export default Direction
