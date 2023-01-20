import { FC, useContext, useEffect } from "react"
import { useForm } from "react-hook-form"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { AuthenticationContext } from "./contexts/authentication.context"

interface ILoginFields {
  username: string
  password: string
}

const LoginForm: FC = () => {
  const { login, token } = useContext(AuthenticationContext)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<ILoginFields>()

  useEffect(() => {
    console.log(watch("username"))
    console.log(watch("password"))
  }, [watch])

  return (
    <Form
      onSubmit={handleSubmit(() => {
        login(watch("username"), watch("password"))
        console.log(token)
      })}
    >
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter email'
          {...register("username")}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Password'
          {...register("password")}
        />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  )
}

export default LoginForm
