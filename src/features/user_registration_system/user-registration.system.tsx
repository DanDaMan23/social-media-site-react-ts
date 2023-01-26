import { FC } from "react"
import UserRegistrationContextProvider from "./contexts/user-registration.context"
import UserRegistrationRouter from "./routes/user-registration.router"

const UserRegistrationSystem: FC = () => {
  return (
    <UserRegistrationContextProvider>
      <h1>User Registration</h1>
      <UserRegistrationRouter />
    </UserRegistrationContextProvider>
  )
}

export default UserRegistrationSystem
