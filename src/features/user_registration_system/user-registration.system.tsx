import { FC } from "react"
import UserRegistrationContextProvider from "./contexts/user-registration.context"
import UserRegistrationForm from "./forms/user-registration.form"

const UserRegistrationSystem: FC = () => {
  return (
    <UserRegistrationContextProvider>
      Registration System
      <UserRegistrationForm />
    </UserRegistrationContextProvider>
  )
}

export default UserRegistrationSystem
