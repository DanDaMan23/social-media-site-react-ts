import { FC } from "react"
import { Button, Form } from "react-bootstrap"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

interface IUserRegistrationFormFields {
  first_name: string
  last_name: string
  username: string
  email: string
  password: string
  confirm_password: string
}

const UserRegistrationForm: FC = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit: SubmitHandler<IUserRegistrationFormFields | FieldValues> = (
    data
  ) => {
    console.log(data)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  )
}

export default UserRegistrationForm
