import { FC } from "react"
import { Routes, Route } from "react-router-dom"
import LoginPage from "./features/login_feature/Login.page"
import Container from "react-bootstrap/Container"
import AuthenticationContextProvider from "./features/login_feature/contexts/authentication.context"

const App: FC = () => {
  return (
    <Container>
      <AuthenticationContextProvider>
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
      </AuthenticationContextProvider>
    </Container>
  )
}

export default App
