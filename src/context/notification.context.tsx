import React, { useState } from 'react'
import { Notification } from '../components'
import { AlertColor } from '@mui/material'
import { NotificationContext } from './useNotification'

export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [msg, setMsg] = useState('')
  const [open, setOpen] = useState(false)
  const [severity, setSeverity] = useState<AlertColor | undefined>(undefined)

  const handleClose = () => {
    setOpen(false)
  }
  const getError = (msg: string) => {
    setOpen(true)
    setMsg(msg)
    setSeverity('error')
  }

  const value = {
    getError,
  }
  return (
    <NotificationContext.Provider value={value}>
      <Notification
        handleClose={handleClose}
        open={open}
        severity={severity}
        msg={msg}
      />
      {children}
    </NotificationContext.Provider>
  )
}
