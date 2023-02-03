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
  getNextPost: () => void
  hasMorePosts: boolean
}

export const SocialMediaPostsContext = createContext<ISocialMediaPostsContext>({
  posts: [],
  error: null,
  getNextPost: () => {},
  hasMorePosts: true
})

const SocialMediaPostsContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const [posts, setPosts] = useState<PostModel[]>([])
  const [nextPostsLink, setNextPostsLink] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const { token } = useContext(AuthenticationContext)

  useEffect(() => {
    setPosts([])
    const apiCall = async () => {
      try {
        const response = await fetch("/posts/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authentication: `Token ${token}`
          }
        })
        const jsonResponse = await response.json()
        setNextPostsLink(jsonResponse!.next)
        setPosts((prevState) => [...prevState, ...jsonResponse.results])
      } catch (e) {
        setError((e as Error).message)
      }
    }
    apiCall()
  }, [token])

  const getNextPost = async () => {
    if (nextPostsLink) {
      try {
        // Have proper API call
        const response = await fetch("/posts/?page=2", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authentication: `Token ${token}`
          }
        })
        const jsonResponse = await response.json()
        setNextPostsLink(jsonResponse!.next)
        setPosts((prevState) => [...prevState, ...jsonResponse.results])
      } catch (e) {
        setError((e as Error).message)
      }
    }
  }

  const contextValue: ISocialMediaPostsContext = {
    posts,
    error,
    getNextPost,
    hasMorePosts: !!nextPostsLink
  }

  return (
    <SocialMediaPostsContext.Provider value={contextValue}>
      {children}
    </SocialMediaPostsContext.Provider>
  )
}

export default SocialMediaPostsContextProvider
