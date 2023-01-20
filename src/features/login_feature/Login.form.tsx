import { FC, useContext } from "react"
import { useForm } from "react-hook-form"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { AuthenticationContext } from "./contexts/authentication.context"

interface ILoginFields {
  username: string
  password: string
}

const LoginForm: FC = () => {
  const { login, error } = useContext(AuthenticationContext)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm<ILoginFields>({
    defaultValues: {
      username: "",
      password: ""
    }
  })

  return (
    <Form
      onSubmit={handleSubmit(() => {
        login(watch("username"), watch("password"))
      })}
    >
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter email'
          {...register("username", { required: true })}
        />
        {errors.username && "Username Required"}
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Password'
          {...register("password", { required: true })}
        />
        {errors.password && "Password Required"}
      </Form.Group>
      {error && <p>{error}</p>}
      <Button variant='primary' type='submit' disabled={!isValid}>
        Submit
      </Button>
    </Form>
  )
}

export default LoginForm
