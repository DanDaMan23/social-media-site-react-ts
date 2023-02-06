import {
  createContext,
  FC,
  ReactNode,
  useCallback,
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
  initialGetPostsCall: () => void
}

export const SocialMediaPostsContext = createContext<ISocialMediaPostsContext>({
  posts: [],
  error: null,
  getNextPost: () => {},
  createNewPost: () => {},
  hasMorePosts: true,
  createPostSuccess: null,
  createPostError: null,
  initialGetPostsCall: () => {}
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

  const {
    fetchWrapper: { get, post }
  } = useContext(AuthenticationContext)
  const initialGetPostsCall = useCallback(async () => {
    try {
      const response = await get("/posts/")
      const jsonResponse = await response.json()

      setNextPostsLink(jsonResponse!.next)
      setPosts(jsonResponse.results)
    } catch (e) {
      setError((e as Error).message)
    }
  }, [get])

  useEffect(() => {
    initialGetPostsCall()
  }, [initialGetPostsCall])

  const getNextPost = async () => {
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
      initialGetPostsCall()
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
    createPostError,
    initialGetPostsCall
  }

  return (
    <SocialMediaPostsContext.Provider value={contextValue}>
      {children}
    </SocialMediaPostsContext.Provider>
  )
}

export default SocialMediaPostsContextProvider
