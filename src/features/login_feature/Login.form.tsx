import { FC, useContext } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { AuthenticationContext } from "./contexts/authentication.context"

const LoginForm: FC = () => {
  const { login, token } = useContext(AuthenticationContext)

  return (
    <Form>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Username</Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password' />
      </Form.Group>

      <Button
        onClick={() => {
          login("aTate", "Password123$")
          console.log(token)
        }}
        variant='primary'
        type='button'
      >
        Submit
      </Button>
    </Form>
  )
}

export default LoginForm
