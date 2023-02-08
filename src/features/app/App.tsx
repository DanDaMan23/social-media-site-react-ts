import { FC } from "react"
import { Container } from "react-bootstrap"
import AuthenticationContextProvider from "../login_feature/contexts/authentication.context"
import AppRouter from "./App.router"

const App: FC = () => {
  return (
    <AuthenticationContextProvider>
      <Container>
        <AppRouter />
      </Container>
    </AuthenticationContextProvider>
  )
}

export default App
