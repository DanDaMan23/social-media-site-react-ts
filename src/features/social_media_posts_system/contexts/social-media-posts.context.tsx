import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react"
import { AuthenticationContext } from "../../login_feature/contexts/authentication.context"
import PostModel from "../models/post.model"

interface ISocialMediaPostsContext {
  posts: PostModel[]
  error: string | null
}

export const SocialMediaPostsContext = createContext<ISocialMediaPostsContext>({
  posts: [],
  error: null
})

const SocialMediaPostsContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const [posts, setPosts] = useState<PostModel[]>([])
  const [error, setError] = useState<string | null>(null)

  const { token } = useContext(AuthenticationContext)

  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await fetch("/posts/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authentication: `Token ${token}`
          }
        })
        const data = await response.json()
        setPosts(data.results)
      } catch (e) {
        setError((e as Error).message)
      }
    }
    apiCall()
  }, [token])

  const contextValue: ISocialMediaPostsContext = {
    posts,
    error
  }

  return (
    <SocialMediaPostsContext.Provider value={contextValue}>
      {children}
    </SocialMediaPostsContext.Provider>
  )
}

export default SocialMediaPostsContextProvider
