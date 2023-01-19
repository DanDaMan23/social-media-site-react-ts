import { FC, useContext, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { AuthenticationContext } from "../login_feature/contexts/authentication.context"
import LoginPage from "../login_feature/Login.page"

const AppRouter: FC = () => {
  const { token } = useContext(AuthenticationContext)

  useEffect(() => {
    console.log(token)
  }, [token])

  return (
    <Routes>
      <Route
        path='/login'
        element={
          <>
            <LoginPage />
          </>
        }
      />

      <Route path='/register' element={<>Register</>} />
      <Route path='/home' element={<>Login Success</>} />
    </Routes>
  )
}

export default AppRouter
