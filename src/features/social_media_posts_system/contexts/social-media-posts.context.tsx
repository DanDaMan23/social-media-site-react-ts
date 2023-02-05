import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react"
import { AuthenticationContext } from "../../login_feature/contexts/authentication.context"
import ICreateSocialMedialPostFormFields from "../create_social_media_post/form/social_media_post_form_fields.interface"
import PostModel from "../models/post.model"

interface ISocialMediaPostsContext {
  posts: PostModel[]
  error: string | null
  getNextPost: () => void
  createNewPost: (formFields: ICreateSocialMedialPostFormFields) => void
  hasMorePosts: boolean
  createPostSuccess: string | null
  createPostError: string | null
}

export const SocialMediaPostsContext = createContext<ISocialMediaPostsContext>({
  posts: [],
  error: null,
  getNextPost: () => {},
  createNewPost: () => {},
  hasMorePosts: true,
  createPostSuccess: null,
  createPostError: null
})

const SocialMediaPostsContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const [posts, setPosts] = useState<PostModel[]>([])
  const [nextPostsLink, setNextPostsLink] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const [createPostSuccess, setCreatePostSuccess] = useState<string | null>(
    null
  )
  const [createPostError, setCreatePostError] = useState<string | null>(null)

  const { token } = useContext(AuthenticationContext)

  useEffect(() => {
    setPosts([])
    const apiCall = async () => {
      try {
        const response = await fetch("/posts/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`
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
        const { pathname, search } = new URL(nextPostsLink)
        const response = await fetch(`${pathname}${search}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`
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

  const createNewPost = async (
    formFields: ICreateSocialMedialPostFormFields
  ) => {
    try {
      const response = await fetch("/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`
        },
        body: JSON.stringify({
          content: formFields.postContent
        })
      })
      const jsonResponse = await response.json()
      setCreatePostSuccess(jsonResponse)
    } catch (e) {
      setCreatePostError((e as Error).message)
    }
  }

  const contextValue: ISocialMediaPostsContext = {
    posts,
    error,
    getNextPost,
    createNewPost,
    hasMorePosts: !!nextPostsLink,
    createPostSuccess,
    createPostError
  }

  return (
    <SocialMediaPostsContext.Provider value={contextValue}>
      {children}
    </SocialMediaPostsContext.Provider>
  )
}

export default SocialMediaPostsContextProvider
