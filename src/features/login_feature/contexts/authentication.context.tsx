import { createContext, FC, ReactNode, useState } from "react"
import { useNavigate } from "react-router"
import { useSessionStorage } from "usehooks-ts"

interface IAuthenticationContext {
  token: string
  login: (username: string, password: string) => void
  error: string | null
}

export const AuthenticationContext = createContext<IAuthenticationContext>({
  token: "",
  login: (username: string, password: string) => {},
  error: null
})

const AuthenticationContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const [token, setToken] = useSessionStorage<string>("token", "")
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const loginHandler = async (username: string, password: string) => {
    setError(null)
    const response = await fetch("/api-token-auth/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
    if (response.ok) {
      const result = await response.json()
      setToken(result.token)

      navigate("/home")
    } else {
      setError("Login Failed")
    }
  }

  const contextValue: IAuthenticationContext = {
    token: token,
    login: loginHandler,
    error: error
  }

  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  )
}

export default AuthenticationContextProvider
