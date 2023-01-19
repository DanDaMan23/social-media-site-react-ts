import { FC } from "react"
import Container from "react-bootstrap/Container"
import AuthenticationContextProvider from "../login_feature/contexts/authentication.context"
import AppRouter from "./App.router"

const App: FC = () => {
  return (
    <Container>
      <AuthenticationContextProvider>
        <AppRouter />
      </AuthenticationContextProvider>
    </Container>
  )
}

export default App
