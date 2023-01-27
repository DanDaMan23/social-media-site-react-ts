import { createContext, FC, ReactNode, useContext, useState } from "react"
import { AuthenticationContext } from "../../login_feature/contexts/authentication.context"

interface ISocialMediaPostsContext {
  getUserHandler: () => void
  success: string | null
  error: string | null
}

export const SocialMediaPostsContext = createContext<ISocialMediaPostsContext>({
  getUserHandler: () => {},
  success: null,
  error: null
})

const SocialMediaPostsContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const { token } = useContext(AuthenticationContext)

  const getUserHandler = async () => {
    const response = await fetch("/posts/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authentication: `Token ${token}`
      }
    })
    const result = await response.json()
    console.log(result)
  }

  const contextValue: ISocialMediaPostsContext = {
    getUserHandler,
    success,
    error
  }
  return (
    <SocialMediaPostsContext.Provider value={contextValue}>
      {children}
    </SocialMediaPostsContext.Provider>
  )
}

export default SocialMediaPostsContextProvider
