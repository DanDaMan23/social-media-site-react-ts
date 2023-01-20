import { createContext, FC, ReactNode } from "react"
import { useSessionStorage } from "usehooks-ts"

interface IAuthenticationContext {
  token: string
  login: (username: string, password: string) => void
}

export const AuthenticationContext = createContext<IAuthenticationContext>({
  token: "",
  login: (username: string, password: string) => {}
})

const AuthenticationContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const [token, setToken] = useSessionStorage<string>("token", "")

  const loginHandler = async (username: string, password: string) => {
    const response = await fetch("/api-token-auth/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
    const result = await response.json()
    setToken(result.token)
  }

  const contextValue: IAuthenticationContext = {
    token: token,
    login: loginHandler
  }

  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  )
}

export default AuthenticationContextProvider
