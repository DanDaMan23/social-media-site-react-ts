import { FC } from "react"
import { Button, Form } from "react-bootstrap"

const UserRegistrationForm: FC = () => {
  return (
    <Form>
      <Form.Group className='mb-3'>
        <Form.Label>First Name</Form.Label>
        <Form.Control type='text' placeholder='Enter First Name' />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type='text' placeholder='Enter Last Name' />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Username</Form.Label>
        <Form.Control type='text' placeholder='Enter Username' />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password' />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type='password' placeholder='Confirm Password' />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  )
}

export default UserRegistrationForm
