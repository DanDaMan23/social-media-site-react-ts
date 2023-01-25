import { FC } from "react"
import { Routes, Route } from "react-router-dom"
import UserRegistrationPage from "../pages/user-registration.page"

const UserRegistrationRouter: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<UserRegistrationPage />} />
      <Route path='/complete' element={<>Successful Registration</>} />
    </Routes>
  )
}

export default UserRegistrationRouter
