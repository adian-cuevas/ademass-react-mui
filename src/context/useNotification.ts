import React, { useContext } from 'react'

type ContextProps = {
  getError: (msg: string) => void
}

export const NotificationContext = React.createContext<ContextProps | null>(
  null
)

export const useNotification = () => {
  const context = useContext(NotificationContext)
  if (!context) throw new Error('No existe contexto')
  return context
}
