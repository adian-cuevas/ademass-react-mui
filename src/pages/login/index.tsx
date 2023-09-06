import { Button, Container } from '@mui/material'
import React from 'react'

export const LoginPage: React.FC<object> = () => {
  return (
    <>
      <Container
        sx={{ mt: 9 }}
        maxWidth='xl'
      >
        <Button
          fullWidth
          variant='contained'
        >
          Login Page
        </Button>
      </Container>
    </>
  )
}
