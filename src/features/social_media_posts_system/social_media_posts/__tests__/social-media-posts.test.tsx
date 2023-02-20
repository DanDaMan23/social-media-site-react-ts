import { render } from "@testing-library/react"
import SocialMediaPosts from "../social-media-posts"
import { MockSocialMediaPostsContextProvider } from "../../contexts/context_test_helpers/social-media-posts.context.test-helpers"

const renderSocialMediaPosts = () =>
  render(
    <MockSocialMediaPostsContextProvider>
      <SocialMediaPosts />
    </MockSocialMediaPostsContextProvider>
  )

describe("social-media-posts test", () => {
  it("should render correctly", async () => {
    const { container } = renderSocialMediaPosts()

    expect(container).toMatchSnapshot()
  })
})
