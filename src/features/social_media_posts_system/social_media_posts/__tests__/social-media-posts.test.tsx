import { fireEvent, render } from "@testing-library/react"
import {
  ISocialMediaPostsContext,
  SocialMediaPostsContext
} from "../../contexts/social-media-posts.context"
import SocialMediaPosts from "../social-media-posts"
import PostModel from "../../models/post.model"

const renderSocialMediaPosts = () => {
  const mockPosts = [
    new PostModel(1, "Hello World", "mockUser", new Date("2022-01-01"), []),
    new PostModel(2, "Hello World", "mockUser2", new Date("2022-01-02"), []),
    new PostModel(3, "Hello World", "mockUser3", new Date("2022-01-03"), [])
  ]

  const contextValue: ISocialMediaPostsContext = {
    posts: mockPosts,
    error: "",
    getNextPosts: jest.fn(),
    createNewPost: jest.fn(),
    hasMorePosts: false,
    createPostSuccess: "",
    createPostError: "",
    initialGetPosts: jest.fn()
  }

  return render(
    <SocialMediaPostsContext.Provider value={contextValue}>
      <SocialMediaPosts />
    </SocialMediaPostsContext.Provider>
  )
}

describe("social-media-posts test", () => {
  it("should render correctly", async () => {
    const { container } = renderSocialMediaPosts()

    expect(container).toMatchSnapshot()
  })
})
