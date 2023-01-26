import { FC } from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import LoginForm from "./Login.form"

const LoginPage: FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <LoginForm />
      <hr />
      <Button
        variant='success'
        style={{ width: "100%" }}
        onClick={() => {
          navigate("/register")
        }}
      >
        Create an account
      </Button>
    </>
  )
}

export default LoginPage
