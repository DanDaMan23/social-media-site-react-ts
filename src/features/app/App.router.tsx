import { FC, useContext } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthenticationContext } from "../login_feature/contexts/authentication.context"
import LoginPage from "../login_feature/Login.page"
import UserRegistrationSystem from "../user_registration_system/user-registration.system"

const AppRouter: FC = () => {
  const { token } = useContext(AuthenticationContext)

  return (
    <Routes>
      {!token && (
        <Route
          path='/login'
          element={
            <>
              <LoginPage />
            </>
          }
        />
      )}

      {!token && (
        <Route path='/register//*' element={<UserRegistrationSystem />} />
      )}
      {token && <Route path='/home' element={<>Login Success</>} />}
      <Route path='*' element={<Navigate to={token ? "/home" : "/login"} />} />
    </Routes>
  )
}

export default AppRouter
