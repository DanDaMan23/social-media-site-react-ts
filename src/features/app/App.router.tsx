import { FC, useContext } from "react"
import { Route, Routes } from "react-router-dom"
import { AuthenticationContext } from "../login_feature/contexts/authentication.context"
import LoginPage from "../login_feature/Login.page"

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

      <Route path='/register' element={<>Register</>} />
      {token && <Route path='/home' element={<>Login Success</>} />}
    </Routes>
  )
}

export default AppRouter
