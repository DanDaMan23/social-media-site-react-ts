import { FC, useContext, useEffect } from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { UserRegistrationContext } from "../contexts/user-registration.context"

const UserRegistrationCompletePage: FC = () => {
  const { success } = useContext(UserRegistrationContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!success) {
      navigate("/register")
    }
  }, [navigate, success])

  return (
    <>
      <h3>Welcome to social media, click "Continue" to login</h3>
      <Button
        variant='primary'
        onClick={() => {
          navigate("/login")
        }}
      >
        Continue
      </Button>
    </>
  )
}

export default UserRegistrationCompletePage
