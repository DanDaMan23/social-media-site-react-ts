import { FC, ReactNode } from "react"
import PostModel from "../../models/post.model"
import {
  ISocialMediaPostsContext,
  SocialMediaPostsContext
} from "../social-media-posts.context"

interface IMockSocialMediaPostsContextProvider {
  initialGetPosts?: jest.Mock
  getNextPosts?: jest.Mock
  createNewPost?: jest.Mock
  children: ReactNode
}

export const MockSocialMediaPostsContextProvider: FC<
  IMockSocialMediaPostsContextProvider
> = ({
  initialGetPosts = jest.fn(),
  getNextPosts = jest.fn(),
  createNewPost = jest.fn(),
  children
}) => {
  const mockPosts = [
    new PostModel(1, "Hello World", "mockUser", new Date("2022-01-01"), []),
    new PostModel(2, "Hello World", "mockUser2", new Date("2022-01-02"), []),
    new PostModel(3, "Hello World", "mockUser3", new Date("2022-01-03"), [])
  ]

  const contextValue: ISocialMediaPostsContext = {
    posts: mockPosts,
    error: "",
    getNextPosts,
    createNewPost,
    hasMorePosts: false,
    createPostSuccess: "",
    createPostError: "",
    initialGetPosts
  }

  return (
    <SocialMediaPostsContext.Provider value={contextValue}>
      {children}
    </SocialMediaPostsContext.Provider>
  )
}
