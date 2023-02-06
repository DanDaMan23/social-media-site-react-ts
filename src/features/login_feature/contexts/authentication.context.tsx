import { createContext, FC, ReactNode, useState } from "react"
import { useNavigate } from "react-router"
import { useSessionStorage } from "usehooks-ts"

interface IFetchWrapper {
  get: (link: string) => Promise<globalThis.Response>
  post: (link: string, body: {}) => Promise<globalThis.Response>
}

interface IAuthenticationContext {
  token: string
  login: (username: string, password: string) => void
  error: string | null
  fetchWrapper: IFetchWrapper
}

export const AuthenticationContext = createContext<IAuthenticationContext>({
  token: "",
  login: () => {},
  error: null,
  fetchWrapper: {
    get: () => new Promise<globalThis.Response>(() => {}),
    post: () => new Promise<globalThis.Response>(() => {})
  }
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

  const get = async (link: string) =>
    await fetch(link, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      }
    })

  const post = async (link: string, body: {}) =>
    await fetch(link, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      },
      body: JSON.stringify(body)
    })

  const contextValue: IAuthenticationContext = {
    token: token,
    login: loginHandler,
    error: error,
    fetchWrapper: {
      get,
      post
    }
  }

  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  )
}

export default AuthenticationContextProvider
