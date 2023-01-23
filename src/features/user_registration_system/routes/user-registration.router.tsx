import { FC } from "react"
import { Routes, Route } from "react-router-dom"
import UserRegistrationForm from "../forms/user-registration.form"

const UserRegistrationRouter: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<UserRegistrationForm />} />
      <Route path='/review' element={<>Review</>} />
      <Route path='/complete' element={<>Complete</>} />
    </Routes>
  )
}

export default UserRegistrationRouter
