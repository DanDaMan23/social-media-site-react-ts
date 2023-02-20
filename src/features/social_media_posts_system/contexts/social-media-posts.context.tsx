import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useState
} from "react"
import { APICallsContext } from "../../api_calls_context/api_calls_context"
import ICreateSocialMedialPostFormFields from "../create_social_media_post/form/social_media_post_form_fields.interface"
import PostModel from "../models/post.model"

export interface ISocialMediaPostsContext {
  posts: PostModel[]
  error: string | null
  getNextPosts: () => void
  createNewPost: (formFields: ICreateSocialMedialPostFormFields) => void
  hasMorePosts: boolean
  createPostSuccess: string | null
  createPostError: string | null
  initialGetPosts: () => void
}

export const SocialMediaPostsContext = createContext<ISocialMediaPostsContext>({
  posts: [],
  error: null,
  getNextPosts: () => {},
  createNewPost: () => {},
  hasMorePosts: true,
  createPostSuccess: null,
  createPostError: null,
  initialGetPosts: () => {}
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

  const { get, post } = useContext(APICallsContext)

  const initialGetPosts = useCallback(async () => {
    try {
      const response = await get("/posts/")

      const jsonResponse = await response.json()

      setNextPostsLink(jsonResponse!.next)
      setPosts(jsonResponse.results)

    } catch (e) {
      setError((e as Error).message)
    }
  }, [get])

  const getNextPosts = async () => {
    if (nextPostsLink) {
      try {
        const { pathname, search } = new URL(nextPostsLink)
        const response = await get(`${pathname}${search}`)
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
      const response = await post("/posts/", {
        content: formFields.postContent
      })

      const jsonResponse = await response.json()
      setCreatePostSuccess(jsonResponse)
      initialGetPosts()
    } catch (e) {
      setCreatePostError((e as Error).message)
    }
  }

  const contextValue: ISocialMediaPostsContext = {
    posts,
    error,
    getNextPosts,
    createNewPost,
    hasMorePosts: !!nextPostsLink,
    createPostSuccess,
    createPostError,
    initialGetPosts
  }

  return (
    <SocialMediaPostsContext.Provider value={contextValue}>
      {children}
    </SocialMediaPostsContext.Provider>
  )
}

export default SocialMediaPostsContextProvider
