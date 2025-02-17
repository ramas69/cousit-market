import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
} 