import { FC } from "react"
import { Routes, Route } from "react-router-dom"
import UserRegistrationCompletePage from "../pages/user-registration.complete.page"
import UserRegistrationPage from "../pages/user-registration.page"

const UserRegistrationRouter: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<UserRegistrationPage />} />
      <Route path='/complete' element={<UserRegistrationCompletePage />} />
    </Routes>
  )
}

export default UserRegistrationRouter
