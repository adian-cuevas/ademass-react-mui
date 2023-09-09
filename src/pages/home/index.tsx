import { Button, Container } from '@mui/material'
import React from 'react'
import { useNotification } from '../../context/useNotification'

export const HomePage: React.FC<object> = () => {
  const { getError } = useNotification()
  const handleClick = () => {
    getError('Hola mundo')
  }
  return (
    <>
      <Container
        sx={{ mt: 9 }}
        maxWidth='xl'
      >
        <Button
          fullWidth
          variant='contained'
          onClick={handleClick}
        >
          Home Page
        </Button>
      </Container>
    </>
  )
}
