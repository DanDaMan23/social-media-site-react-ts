import { createContext, FC, ReactNode, useState } from "react"

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
  const [token, setToken] = useState<string>("")

  const loginHandler = async (username: string, password: string) => {
    const response = await fetch("http://127.0.0.1:8000/api-token-auth/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
    console.log("execute login handler")
    const res = await response.json()
    console.log(res)
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
