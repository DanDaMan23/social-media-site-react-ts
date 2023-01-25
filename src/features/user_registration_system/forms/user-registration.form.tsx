import { FC } from "react"
import { Form } from "react-bootstrap"
import { UseFormRegister } from "react-hook-form"
import IUserRegistrationFormFields from "./user-registration.form.interface"

interface IUserRegistrationForm {
  register: UseFormRegister<IUserRegistrationFormFields>
}

const UserRegistrationForm: FC<IUserRegistrationForm> = ({ register }) => {
  return (
    <Form>
      <Form.Group className='mb-3'>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter First Name'
          {...register("first_name", { required: true })}
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter Last Name'
          {...register("last_name", { required: true })}
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter Username'
          {...register("username", { required: true })}
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          {...register("email", { required: true })}
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Password'
          {...register("password", { required: true })}
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Confirm Password'
          {...register("confirm_password", { required: true })}
        />
      </Form.Group>
    </Form>
  )
}

export default UserRegistrationForm
